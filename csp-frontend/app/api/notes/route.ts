import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Note from "../../../models/Note";

export async function POST(req: Request) {
  try {
    const { title, subject, pdfLink } = await req.json();

    await connectDB();

    const note = await Note.create({
      title,
      subject,
      pdfLink,
    });

    return NextResponse.json(
      {
        message: "Note uploaded successfully",
        note,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("NOTE UPLOAD ERROR:", error);

    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const notes = await Note.find().sort({
      createdAt: 1,
    });

    return NextResponse.json(notes);
  } catch (error) {
    console.error("FETCH NOTES ERROR:", error);

    return NextResponse.json(
      { message: "Failed to fetch notes" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await connectDB();

    await Note.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error("DELETE NOTE ERROR:", error);

    return NextResponse.json(
      { message: "Delete failed" },
      { status: 500 }
    );
  }
}