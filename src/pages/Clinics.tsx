import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Search, Calendar } from "lucide-react";
import clinicImage from "@/assets/clinic.jpg";

const mockClinics = [
  {
    id: 1,
    name: "Smile Dental Care",
    specialty: "General Dentistry",
    rating: 4.8,
    distance: "0.5 km",
    address: "123 Health Street, City Center",
    phone: "+40 123 456 789",
    nextAvailable: "Today 2:30 PM",
    services: ["Cleaning", "Fillings", "Whitening"]
  },
  {
    id: 2,
    name: "Modern Orthodontics",
    specialty: "Orthodontics",
    rating: 4.9,
    distance: "1.2 km",
    address: "456 Care Avenue, Medical District",
    phone: "+40 987 654 321",
    nextAvailable: "Tomorrow 10:00 AM",
    services: ["Braces", "Invisalign", "Retainers"]
  },
  {
    id: 3,
    name: "Family Health Clinic",
    specialty: "Family Medicine",
    rating: 4.6,
    distance: "2.1 km",
    address: "789 Wellness Boulevard, Suburbs",
    phone: "+40 555 123 456",
    nextAvailable: "Monday 9:15 AM",
    services: ["Check-ups", "Vaccinations", "Lab Tests"]
  }
];

export const Clinics = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const filteredClinics = mockClinics.filter(clinic => 
    clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    clinic.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Find Nearby Clinics</h1>
        <p className="text-muted-foreground text-sm">
          Discover and book appointments with trusted healthcare providers
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input 
          placeholder="Search clinics or specialties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Specialty Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["all", "dentistry", "orthodontics", "family medicine"].map((specialty) => (
          <Badge
            key={specialty}
            variant={selectedSpecialty === specialty ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap"
            onClick={() => setSelectedSpecialty(specialty)}
          >
            {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
          </Badge>
        ))}
      </div>

      {/* Clinics List */}
      <div className="space-y-4">
        {filteredClinics.map((clinic) => (
          <Card key={clinic.id} className="shadow-card hover:shadow-glow transition-shadow">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <img 
                  src={clinicImage} 
                  alt={clinic.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">{clinic.name}</h3>
                      <p className="text-xs text-muted-foreground">{clinic.specialty}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{clinic.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{clinic.distance} • {clinic.address}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3 text-secondary" />
                      <span className="text-secondary font-medium">Next: {clinic.nextAvailable}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {clinic.services.slice(0, 3).map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      Book Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Clinic */}
      <Card className="shadow-soft border-dashed">
        <CardContent className="p-6 text-center">
          <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
          <h3 className="font-medium text-sm mb-1">Can't find your clinic?</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Help us expand our network by suggesting a new clinic
          </p>
          <Button variant="outline" size="sm">
            Suggest Clinic
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};