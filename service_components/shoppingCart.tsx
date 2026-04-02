"use client"
import { useState } from "react"
import { Trash } from "lucide-react"
import { featureCards } from "@/app/data/serviceData"
import { AddOn } from "@/interfaces/services"
import { useService } from "@/app/data/serviceContext"
import { sendQuote } from "@/components/emailServer"
import SubmitSuccess from "@/service_components/submitSuccess"

export default function ShoppingCart({}) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    selectedAddOns,
    setSelectedAddOns,
    selectedPackage,
    setSelectedPackage,
    selectedService,
  } = useService()

  const disabledButton = () => {
    if (isSubmitting) return true
    if (selectedAddOns.length === 0 && Object.keys(selectedPackage).length === 0) return true
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") return true
    return false
  }
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
    setIsSubmitting(true)
    const results = await sendQuote(finalQuote)

    setIsSubmitting(false)
    if (results) {
      setShowSuccess(true)
      setSelectedAddOns([])
      setSelectedPackage({})
      setEmail("")
      setName("")
      setPhone("")
    } else {
      setShowSuccess(false)
    }
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
    <>
      <form
        onSubmit={handleQuoteSubmit}
        className="card sticky top-25 fieldset lg:w-100 md:w-1/2 sm:w-3/4"
      >
        <fieldset className="fieldset card-body">
          {/* Pricing */}

          <div
            // Changed the width classes at the very end to just w-full
            className={`card mx-auto card-sm ${featureCards[selectedService].theme.gradient} ${selectedAddOns.length > 0 || selectedPackage?.name ? "glowBreathe" : ""} w-full`}
          >
            {isSubmitting ? (
              /* Loading State */
              <div className="flex flex-col items-center justify-center p-10 space-y-4">
                <span className="loading loading-ring loading-lg text-primary" />
                <p className="font-semibold">Processing your quote...</p>
              </div>
            ) : (
              /* Form State */
              <div className="card-body text-zinc-900">
                <h1 className="card-title">
                  Select a Package or Add-On and enter your contact information
                  to receive a quote.
                </h1>
                <hr className="my-2" />

                {(selectedAddOns.length > 0 || selectedPackage?.name) && (
                  <>
                    {Object.keys(selectedPackage || {}).length > 0 && (
                      <ul>
                        <li className="flex items-center gap-2 justify-between text-base font-semibold">
                          Package: {selectedPackage.name} $
                          {selectedPackage.price}
                          <Trash
                            className={deleteClass}
                            onClick={() => removePackage(selectedPackage.name)}
                          />
                        </li>
                      </ul>
                    )}
                    {selectedAddOns.map((addOn: AddOn) => (
                      <ul key={addOn.id}>
                        <li className="flex items-center font-semibold text-base gap-2 justify-between">
                          {addOn.name}: ${addOn.price}
                          <Trash
                            onClick={() => removeAddOn(addOn)}
                            className={deleteClass}
                          />
                        </li>
                      </ul>
                    ))}
                    <h1 className="text-2xl font-bold">
                      Total: ${totalAddOns()}
                    </h1>
                  </>
                )}

                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input text-white validator"
                  minLength={3}
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input text-white validator"
                  minLength={3}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input text-white validator"
                  minLength={3}
                  placeholder="Phone Number"
                  pattern="^(\d{10}|\(\d{3}\)\s?\d{3}-\d{4}|\d{3}-\d{3}-\d{4})$"
                  maxLength={10}
                  required
                />

                <button type="submit" className={`btn mt-4 disabled:bg-gray-500`} disabled={disabledButton()}>
                  Submit Quote
                </button>
              </div>
            )}

            {/* The visible Add-Ons list container */}
          </div>
        </fieldset>
      </form>
      {/* Success Alert */}
      {showSuccess && (
        <SubmitSuccess
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  )
}
