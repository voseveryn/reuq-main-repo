// app/components/ContactForm.tsx
'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, lastname, phoneNumber, email, text }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus({ ok: false, msg: data?.error ?? 'Nepodařilo se odeslat zprávu.' })
      } else {
        setStatus({ ok: true, msg: 'Zpráva byla úspěšně odeslána. Ozveme se co nejdříve.' })
        setName('')
        setEmail('')
        setText('')
      }
    } catch (err) {
      setStatus({ ok: false, msg: 'Došlo k chybě při odesílání. Zkuste to prosím znovu.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Jméno</label>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Vaše jméno"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Příjmení</label>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          value={lastname}
          onChange={e => setLastName(e.target.value)}
          placeholder="Vaše jméno"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Telefon</label>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder="Vaše jméno"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">E-mail*</label>
        <input
          required
          type="email"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="vas@email.cz"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Zpráva</label>
        <textarea
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 min-h-[120px]"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="S čím potřebujete pomoct?"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-gray-900 bg-gray-900 text-white hover:bg-black/90 disabled:opacity-50"
      >
        {submitting ? 'Odesílám…' : 'Odeslat'}
      </button>

      {status && (
        <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>
          {status.msg}
        </p>
      )}
    </form>
  )
}

export default ContactForm
