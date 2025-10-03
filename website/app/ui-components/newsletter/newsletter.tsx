// app/ui-components/newsletter/newsletter.tsx  (nahradit tvůj obsah)
'use client'
import React, { useState } from 'react'

const Newsletter = () => {
  const [mail, setMail] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErr(null)
    setMsg(null)

    if (!/^\S+@\S+\.\S+$/.test(mail)) {
      setErr('Zadej platný e-mail.')
      return
    }

    setBusy(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mail: mail.trim().toLowerCase() }),
      })
      const json = await res.json()
      if (!res.ok || !json?.ok) {
        setErr(json?.message ?? 'Nepodařilo se odeslat.')
      } else {
        setMsg('Díky! Jsi přihlášen.')
        setMail('')
      }
    } catch {
      setErr('Server je nedostupný. Zkus to prosím později.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="w-full px-4 py-12">
      <h2>Chcete dostávat novinky o našech službách ?</h2>
      <p>Napiště nám váš email a budeme vám zasílat novinky z našeho světa IoT.</p>
      <form onSubmit={onSubmit} className="mx-auto max-w-md flex gap-3">
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Váš e-mail"
          required
          className="flex-1 rounded-lg border px-4 py-3 outline-none"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-lg px-5 py-3 border bg-black text-white disabled:opacity-50"
        >
          {busy ? 'Odesílám…' : 'Odebírat'}
        </button>
      </form>
      {err && <p className="mt-3 text-red-600 text-sm">{err}</p>}
      {msg && <p className="mt-3 text-green-600 text-sm">{msg}</p>}
    </section>
  )
}

export default Newsletter
