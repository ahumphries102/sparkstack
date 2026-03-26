"use client"
import { useState } from "react"
import { Trash } from "lucide-react"
import { featureCards } from "@/app/data/serviceData"
import { AddOn } from "@/interfaces/services"
import { useService } from "@/app/data/serviceContext"
import { sendQuote } from "@/components/emailServer"

export default function ShoppingCart({}) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const {
    selectedAddOns,
    setSelectedAddOns,
    selectedPackage,
    setSelectedPackage,
    selectedService,
  } = useService()

  const deleteClass =
    "w-4 h-4 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"

  const totalAddOns = () => {
    const addOnsTotal = selectedAddOns.reduce(
      (total, addon) => total + addon.price,
      0,
    )
    if (Object.keys(selectedPackage).length > 0) {
      return addOnsTotal + selectedPackage.price!
    } else {
      return addOnsTotal
    }
  }
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const finalQuote = {
      clientName: name,
      clientPhone: phone,
      clientEmail: email,
      service: selectedService,
      package: selectedPackage,
      addOns: selectedAddOns.map((a) => ({ name: a.name, price: a.price })),
      total: totalAddOns(),
    }
    await sendQuote(finalQuote)
    setEmail("")
    setName("")
    setPhone("")
    setSelectedAddOns([])
    setSelectedPackage({})
  }

  const removeAddOn = (addOnToRemove: AddOn) => {
    setSelectedAddOns((prevAddOns) =>
      prevAddOns.filter((addOn) => addOn.id !== addOnToRemove.id),
    )
  }

  const removePackage = (packageName: string) => {
    if (selectedPackage.name === packageName) {
      setSelectedPackage({})
    }
  }
  return (
    <form onSubmit={handleQuoteSubmit} className="card sticky top-25 fieldset">
      <fieldset className="fieldset card-body">
        {/* Pricing */}

        <div
          // Changed the width classes at the very end to just w-full
          className={`card mx-auto card-sm ${featureCards[selectedService].theme.gradient} ${selectedAddOns.length > 0 || selectedPackage?.name ? "glowBreathe" : ""} w-full`}
        >
          <div className="card-body text-zinc-900">
            <h1 className="card-title">
              Select a Package or Add-On and enter your contact information to
              receive a quote.
            </h1>
            <hr className="my-2" />
            {(selectedAddOns.length > 0 || selectedPackage?.name) && (
              <>
                {Object.keys(selectedPackage).length > 0 && (
                  <ul>
                    <li className="flex items-center gap-2 justify-between">
                      Package: {selectedPackage.name} ${selectedPackage.price}
                      <Trash
                        className={deleteClass}
                        onClick={() => removePackage(selectedPackage.name)}
                      />
                    </li>
                  </ul>
                )}
                {selectedAddOns.map((addOn: AddOn) => (
                  <ul key={addOn.id}>
                    <li className="flex items-center gap-2 justify-between">
                      {addOn.name}: ${addOn.price}
                      <Trash
                        onClick={() => removeAddOn(addOn)}
                        className={deleteClass}
                      />
                    </li>
                  </ul>
                ))}
                <h1 className="text-2xl">Total: ${totalAddOns()}</h1>
              </>
            )}
            <legend className="fieldset-legend">
              What is your email address?*
            </legend>
            <input
              type="text"
              name="name" // Added a name attribute
              value={name} // Connect to state
              onChange={(e) => setName(e.target.value)} // Update state on type
              className="input text-white validator"
              minLength={3}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="user_email" // Added a name attribute
              value={email} // Connect to state
              onChange={(e) => setEmail(e.target.value)} // Update state on type
              className="input text-white validator"
              minLength={3}
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phone" // Added a name attribute
              value={phone} // Connect to state
              onChange={(e) => setPhone(e.target.value)} // Update state on type
              className="input text-white validator"
              minLength={3}
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              required
            />
            <button
              type="submit" // Trigger the form's onSubmit
              className="btn"
            >
              Submit Quote
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
