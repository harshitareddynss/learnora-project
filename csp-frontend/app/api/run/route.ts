import { writeFileSync, unlinkSync, existsSync } from "fs";
import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    const fileName = "temp.c";
    const exeName = "temp.exe";

    writeFileSync(fileName, code);

    return new Promise<NextResponse>((resolve) => {
      exec(
        `gcc ${fileName} -o ${exeName} && .\\${exeName}`,
        (error, stdout, stderr) => {

          // delete temp files
          if (existsSync(fileName)) unlinkSync(fileName);
          if (existsSync(exeName)) unlinkSync(exeName);

          resolve(
            NextResponse.json({
              output: error
                ? stderr || error.message
                : stdout,
            })
          );
        }
      );
    });
  } catch (err) {
    return NextResponse.json({
      output: "Server Error",
    });
  }
}