"use client"

import { useState, useTransition } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Loader2 } from "lucide-react"

export function ROICalculator() {
  const [monthlyCosts, setMonthlyCosts] = useState("")
  const [numEmployees, setNumEmployees] = useState("")
  const [repetitiveHours, setRepetitiveHours] = useState("")
  const [annualSavings, setAnnualSavings] = useState<number | null>(null)
  const [isPending, startTransition] = useTransition()

  const calculateSavings = () => {
    startTransition(() => {
      const costs = Number.parseFloat(monthlyCosts)
      const employees = Number.parseInt(numEmployees)
      const hours = Number.parseFloat(repHours)

      if (isNaN(costs) || isNaN(employees) || isNaN(hours) || employees === 0) {
        setAnnualSavings(null)
        return
      }

      // Simulate calculation delay
      setTimeout(() => {
        const avgHourlyRate = costs / (employees * 160) // Assuming 160 work hours/month
        const totalRepetitiveHoursAnnual = employees * hours * 12
        const potentialSavings = totalRepetitiveHoursAnnual * avgHourlyRate * 0.4 // Assuming 40% savings
        setAnnualSavings(potentialSavings)
      }, 1000)
    })
  }

  const repHours = repetitiveHours // To avoid shadowing state variable in calculation

  return (
    <section id="roi-calculator" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-thin tracking-tight sm:text-4xl md:text-5xl">
            Calculate Your Potential Savings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <Label htmlFor="monthlyCosts" className="font-light text-muted-foreground">
                Monthly Operational Costs ($)
              </Label>
              <Input
                type="number"
                id="monthlyCosts"
                className="bg-input/50 border-border/50 font-light"
                placeholder="e.g., 50000"
                value={monthlyCosts}
                onChange={(e) => setMonthlyCosts(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="numEmployees" className="font-light text-muted-foreground">
                Number of Employees
              </Label>
              <Input
                type="number"
                id="numEmployees"
                className="bg-input/50 border-border/50 font-light"
                placeholder="e.g., 25"
                value={numEmployees}
                onChange={(e) => setNumEmployees(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="repetitiveHours" className="font-light text-muted-foreground">
                Weekly Repetitive Hours / Employee
              </Label>
              <Input
                type="number"
                id="repetitiveHours"
                className="bg-input/50 border-border/50 font-light"
                placeholder="e.g., 5"
                value={repetitiveHours}
                onChange={(e) => setRepetitiveHours(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={calculateSavings} disabled={isPending} className="text-base font-light px-8 py-3">
            {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Calculate Savings
          </Button>
          {annualSavings !== null && !isPending && (
            <div className="mt-8 p-6 bg-card/50 rounded-lg">
              <h3 className="text-2xl font-thin text-muted-foreground">Potential Annual Savings:</h3>
              <p className="text-4xl font-light text-primary mt-2">
                ${annualSavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
