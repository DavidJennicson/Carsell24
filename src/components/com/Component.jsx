"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const brands = [
  { value: "toyota", label: "Toyota" },
  { value: "honda", label: "Honda" },
  { value: "ford", label: "Ford" },
  // Add more brands as needed
];

const models = [
  { value: "corolla", label: "Corolla" },
  { value: "civic", label: "Civic" },
  { value: "mustang", label: "Mustang" },
  // Add more models as needed
];

export default function Component() {
  const [openBrand, setOpenBrand] = React.useState(false);
  const [openModel, setOpenModel] = React.useState(false);
  const [selectedBrand, setSelectedBrand] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("");
  const [fuel, setFuel] = React.useState("");
  const [kmDriven, setKmDriven] = React.useState("");
  const [owner, setOwner] = React.useState("");
  const [sellerType, setSellerType] = React.useState("");
  const [transmission, setTransmission] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fuel,
        km_driven: kmDriven,
        name: selectedModel, // Assuming name is derived from selected model
        owner,
        seller_type: sellerType,
        transmission,
        year: new Date().getFullYear(), // Example: sending the current year
      }),
    });

    if (response.ok) {
      const prediction = await response.json();
      console.log("Prediction result:", prediction);
      // Handle the prediction result here (e.g., display it to the user)
    } else {
      console.error("Error during prediction");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600 p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <CardContent>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
          <p className="text-gray-500 text-center mb-6">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label>Brand</Label>
              <Popover open={openBrand} onOpenChange={setOpenBrand}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openBrand}
                    className="w-full justify-between"
                  >
                    {selectedBrand
                      ? brands.find((brand) => brand.value === selectedBrand)?.label
                      : "Select brand..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search brand..." />
                    <CommandList>
                      <CommandEmpty>No brand found.</CommandEmpty>
                      <CommandGroup>
                        {brands.map((brand) => (
                          <CommandItem
                            key={brand.value}
                            value={brand.value}
                            onSelect={(currentValue) => {
                              setSelectedBrand(currentValue === selectedBrand ? "" : currentValue);
                              setOpenBrand(false);
                            }}
                          >
                            <Check className={selectedBrand === brand.value ? "mr-2 h-4 w-4 opacity-100" : "mr-2 h-4 w-4 opacity-0"} />
                            {brand.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>Model</Label>
              <Popover open={openModel} onOpenChange={setOpenModel}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openModel}
                    className="w-full justify-between"
                  >
                    {selectedModel
                      ? models.find((model) => model.value === selectedModel)?.label
                      : "Select model..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search model..." />
                    <CommandList>
                      <CommandEmpty>No model found.</CommandEmpty>
                      <CommandGroup>
                        {models.map((model) => (
                          <CommandItem
                            key={model.value}
                            value={model.value}
                            onSelect={(currentValue) => {
                              setSelectedModel(currentValue === selectedModel ? "" : currentValue);
                              setOpenModel(false);
                            }}
                          >
                            <Check className={selectedModel === model.value ? "mr-2 h-4 w-4 opacity-100" : "mr-2 h-4 w-4 opacity-0"} />
                            {model.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>Fuel Type</Label>
              <Input
                placeholder="Enter fuel type"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                className="border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <Label htmlFor="km_driven">KM Driven</Label>
              <Input
                id="km_driven"
                type="number"
                placeholder="Enter KM driven"
                value={kmDriven}
                onChange={(e) => setKmDriven(e.target.value)}
                className="border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <Label>Owner</Label>
              <Input
                placeholder="Enter number of owners"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <Label>Seller Type</Label>
              <Select onValueChange={setSellerType}>
                <SelectTrigger aria-label="Seller Type">
                  <SelectValue placeholder="Select seller type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Seller Types</SelectLabel>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="dealer">Dealer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Transmission</Label>
              <Select onValueChange={setTransmission}>
                <SelectTrigger aria-label="Transmission">
                  <SelectValue placeholder="Select transmission type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Transmission Types</SelectLabel>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px] border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <Button type="submit" className="bg-green-500 text-white hover:bg-green-600 w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
