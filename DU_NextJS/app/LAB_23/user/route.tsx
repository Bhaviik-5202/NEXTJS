import { NextRequest, NextResponse } from "next/server";
import { students } from "../data";

export function GET() {
    return NextResponse.json(students);
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    const newStudent = {
        id: (students.length + 1).toString(),
        name: data.name,
        email: `${data.name.toLowerCase().replace(/\s+/g, "")}@example.com`
    };
    students.push(newStudent);
    return NextResponse.json(newStudent, { status: 201 });
}
