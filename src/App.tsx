import { useState, useEffect } from 'react'
import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'
import { initialInvoice } from './data/initialData'

function loadInvoice(): Invoice {
  try {
    const saved = window.localStorage.getItem('invoiceData')
    if (saved) return { ...initialInvoice, ...JSON.parse(saved) }
  } catch (_e) {}
  return { ...initialInvoice }
}

function App() {
  const [data, setData] = useState<Invoice>(loadInvoice)

  // Sync across tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'invoiceData') {
        setData(loadInvoice())
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
    setData(invoice)
  }

  return (
    <div className="app">
      <h1 className="center fs-30">BT Repair Centre Ltd</h1>
      <InvoicePage data={data} onChange={onInvoiceUpdated} />
    </div>
  )
}

export default App
