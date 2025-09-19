import { NextResponse } from 'next/server';
import { ContemberClient } from '@/app/contember';
import { createCustomerMutation } from '@/app/fragments/mutations/CustomerFragment';

const contember = ContemberClient();

export async function POST(req: Request) {
  try {
    const { name, lastName, email, phoneNumber, text } = await req.json();

    // Validace vstupů
    if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, message: 'Neplatný e-mail.' }, { status: 400 });
    }

    if (typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
      return NextResponse.json({ ok: false, message: 'Telefonní číslo je povinné.' }, { status: 400 });
    }

    // Vytvoření zákazníka
    await contember.mutate(
      createCustomerMutation({
        name,
        lastName,
        email,
        phoneNumber,
        text, // Volitelné pole
      })
    );

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ ok: false, message: 'Server error.' }, { status: 500 });
  }
}