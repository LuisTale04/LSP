import Rectangle from "@/utils/shapes/rectangle";
import Shape from "@/utils/shapes/shape";
import Square from "@/utils/shapes/square";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requiredShape = searchParams.get("shape");

  let shape: Shape;

  if (requiredShape === "rectangle") {
    shape = new Rectangle(5, 4);
  } else if (requiredShape === "square") {
    shape = new Square(5);
  } else {
    return NextResponse.json(
      { error: "Invalid shape. Use 'rectangle' or 'square'." },
      { status: 400 }
    );
  }

  const area = shape.getArea();

  return NextResponse.json({
    area,
  });
}
