import { createClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, pin } = await req.json();

    // PIN Validate
    if (pin !== process.env.PIN_SECRET) {
      return NextResponse.json(
        { message: "Something went wrongs" },
        { status: 401 }
      );
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({
      message: "Login successfully",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
