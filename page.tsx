
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, Shield, Clock } from "lucide-react"
import { RegistrationPopup } from "@/components/registration-popup"
import { SignInPopup } from "@/components/signin-popup"
import { PackageSelection } from "@/components/package-selection"
import { BrokerSelection } from "@/components/broker-selection"
import Image from "next/image"
import { GettingStartedPopup } from "@/components/getting-started-popup"
import { BrokerPopup } from "@/components/broker-popup"

// HERO SECTION
<section className="bg-[#1e1e1e] text-white py-20 px-6 text-center">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Let Your Trades Work While You Live.</h1>
  <p className="text-lg md:text-xl mb-8 text-[#DAA520]">Build consistent profit with our custom indicator & robot strategy.</p>
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <Button className="bg-[#DAA520] text-black px-6 py-3 font-semibold">Get the Indicator</Button>
    <Button className="bg-[#DAA520] text-black px-6 py-3 font-semibold">Choose a Broker</Button>
    <Button className="bg-[#DAA520] text-black px-6 py-3 font-semibold">Book a Setup Call</Button>
  </div>
</section>

// DEVICE REQUIREMENTS SECTION
<section className="px-6 py-10 bg-gray-100 rounded-2xl shadow-md my-10">
  <h2 className="text-2xl font-bold mb-4">Device Requirements</h2>
  <p className="text-base leading-relaxed">
    Our trading robot and indicator are designed for full functionality on desktop or laptop computers. 
    You’ll need a computer to set up and trade effectively using our tools.
  </p>
  <p className="text-base leading-relaxed mt-4">
    However, you can easily monitor your trades and receive real-time notifications through your mobile device via Telegram.
  </p>
</section>

// BROKER SECTION
<section className="bg-white py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-6 text-[#1e1e1e]">Partnered with AvaTrade</h2>
  <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-700">
    We proudly work with AvaTrade — a globally trusted broker. Sign up through our affiliate link to activate your robot access and receive up to 2 months of free use.
  </p>
  <a href="https://tracking.avapartner.com/imp/?affid=81989&adTheme=766&campaign=97188&campaignName=Default%20Campaign&tag=81989" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://tracking.avapartner.com/imp/?affid=81989&logoId=35035&adTheme=766&campaign=97188&campaignName=Default%20Campaign&tag=81989" 
      alt="AvaTrade Logo" 
      className="mx-auto w-[200px] h-auto hover:scale-105 transition-transform"
    />
  </a>
</section>

// WHAT YOU GET SECTION
<section className="bg-gray-100 py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-6 text-[#1e1e1e]">What You Get</h2>
  <div className="max-w-3xl mx-auto text-left space-y-4 text-lg text-gray-800">
    <p>✅ Custom-built MT4 indicator</p>
    <p>✅ Robot access after deposit</p>
    <p>✅ Telegram updates (not WhatsApp)</p>
    <p>✅ Free 2-month access after broker signup</p>
    <p>✅ One-on-one robot setup via Teams</p>
  </div>
</section>
