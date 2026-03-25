import { useState } from "react"
import { featureCards, tabs } from "@/app/data/serviceData"
import { AddOn } from "@/interfaces/services"
import { Trash } from "lucide-react"
import { useService } from "@/app/data/serviceContext"
import { sendQuote } from "@/components/emailServer"

export default function ServiceSelection({}) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const {
    selectedAddOns,
    setSelectedAddOns,
    selectedPackage,
    setSelectedPackage,
    selectedService,
    setSelectedService,
    selectedTab,
    setSelectedTab,
  } = useService()
  const serviceConfig = featureCards[selectedService]
  const featureCardsToArray = Object.values(featureCards).map((value) => value)
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
      submittedAt: new Date().toLocaleString("en-US", {
        hour12: true,
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    }
    await sendQuote(finalQuote)
    setEmail("")
    setName("")
    setPhone("")
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
    <div className="h-[100%] sticky top-70 flex justify-end">
      <div className="flex-col">
        <div className="flex flex-col gap-4 mb-12 overflow-x-auto pb-2">
          <div className="flex gap-4 p-1">
            {featureCardsToArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-10 h-10 bg-gradient-to-br ${item.theme.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out`}
                >
                  <item.icon
                    className="w-6 h-6 text-white"
                    onClick={() => setSelectedService(item.service)}
                  />
                </div>
              )
            })}
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize whitespace-nowrap transition-all
                ${
                  selectedTab === tab.id
                    ? `${serviceConfig.theme.gradient} text-white`
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <form onSubmit={handleQuoteSubmit}>
          <fieldset className="fieldset">
            {/* Pricing */}
            {selectedTab === "pricing" && (
              <div
                className={`card card-sm ${featureCards[selectedService].theme.gradient} ${selectedAddOns.length > 0 || selectedPackage?.name ? "glowBreathe" : ""}`}
              >
                <div className="card-body text-zinc-900">
                  <h1 className="card-title">Your Projected Total</h1>
                <hr className="my-2" />
                  {(selectedAddOns.length > 0 || selectedPackage?.name) && (
                    <>
                      <div
                        style={{
                          overflowY: "scroll",
                          textOverflow: "ellipsis",
                          height: "105px",
                        }}
                      >
                        
                        {Object.keys(selectedPackage).length > 0 && (
                          <ul>
                            <li className="flex items-center gap-2 justify-between">
                              Package: {selectedPackage.name} $
                              {selectedPackage.price}
                              <Trash
                                className={deleteClass}
                                onClick={() =>
                                  removePackage(selectedPackage.name)
                                }
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
                      </div>
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
                    className="input text-white"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="text"
                    name="user_email" // Added a name attribute
                    value={email} // Connect to state
                    onChange={(e) => setEmail(e.target.value)} // Update state on type
                    className="input text-white"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="text"
                    name="phone" // Added a name attribute
                    value={phone} // Connect to state
                    onChange={(e) => setPhone(e.target.value)} // Update state on type
                    className="input text-white"
                    placeholder="Phone Number"
                    required
                  />
                  <button
                    type="submit" // Trigger the form's onSubmit
                    disabled={selectedAddOns.length <= 0 || !email} // Bonus: disable if empty
                    className="btn"
                  >
                    Submit Quote
                  </button>
                </div>
              </div>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  )
}
