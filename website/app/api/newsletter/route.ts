// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { GraphQlClient } from '@contember/graphql-client'
import { ContentClient } from '@contember/client-content'
import { createNewsletterMutation } from '../../fragments/mutations/NewsletterFragment'
import { ContemberClient } from '@/app/contember'

// Env proměnné si hoď do .env.local

const contember = ContemberClient()

export async function POST(req: Request) {
  try {
    const { mail } = await req.json()

    if (typeof mail !== 'string' || !/^\S+@\S+\.\S+$/.test(mail)) {
      return NextResponse.json({ ok: false, message: 'Neplatný e-mail.' }, { status: 400 })
    }

    // Doporučeně idempotentně:
    await contember.mutate(createNewsletterMutation(mail.trim().toLowerCase()))

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ ok: false, message: 'Server error.' }, { status: 500 })
  }
}
