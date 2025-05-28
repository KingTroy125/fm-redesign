
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    enquiryType: '',
    interested: '',
    region: '',
    city: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you for your enquiry. We'll get back to you within 24 hours.",
    });
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-meat-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Trade Enquiries Info */}
          <Card className="bg-meat-lightcream border-meat-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-meat-red">Trade Enquiries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-meat-brown">
                <p>• Feinschmecker Deli Meats delivers free of charge to the commercial trade nationwide only.</p>
                <p>• We unfortunately do not do home deliveries.</p>
                <p>• We are however happy to direct you to your closest outlet if you are a consumer looking for one of our products.</p>
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-meat-red mb-4">Contact Us</h3>
                <div className="space-y-2 text-meat-brown">
                  <p> Tel: +27 (11) 827 7644</p>
                  <p> Email: sales@feinschmecker.co.za</p>
                  <p> WhatsApp us: +27 82 892 0836</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-meat-red mb-4">Visit Us</h3>
                <p className="text-meat-brown">47 Machine Street, Elsburg, Germiston, Johannesburg, South Africa</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-meat-red mb-4">Mail Us</h3>
                <p className="text-meat-brown">PO Box 9266, Elsburg, 1407</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white border-meat-red/20">
            <CardHeader>
              <CardTitle className="text-2xl text-meat-red">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-meat-brown">First Name*</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="border-meat-cream focus:border-meat-red"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-meat-brown">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="border-meat-cream focus:border-meat-red"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-meat-brown">Email Address*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="border-meat-cream focus:border-meat-red"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-meat-brown">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="border-meat-cream focus:border-meat-red"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-meat-brown">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="border-meat-cream focus:border-meat-red"
                  />
                </div>

                <div>
                  <Label htmlFor="enquiryType" className="text-meat-brown">Enquiry Type*</Label>
                  <Select value={formData.enquiryType} onValueChange={(value) => handleChange('enquiryType', value)}>
                    <SelectTrigger className="border-meat-cream focus:border-meat-red">
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-meat-cream">
                      <SelectItem value="general">General Enquiry</SelectItem>
                      <SelectItem value="wholesale">Wholesale Orders</SelectItem>
                      <SelectItem value="custom">Custom Cuts</SelectItem>
                      <SelectItem value="delivery">Delivery Information</SelectItem>
                      <SelectItem value="pricing">Pricing Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interested" className="text-meat-brown">I am interested in...</Label>
                  <Textarea
                    id="interested"
                    value={formData.interested}
                    onChange={(e) => handleChange('interested', e.target.value)}
                    className="border-meat-cream focus:border-meat-red"
                    placeholder="Please describe your requirements..."
                  />
                </div>

                <div>
                  <Label htmlFor="region" className="text-meat-brown">Choose your region*</Label>
                  <Select value={formData.region} onValueChange={(value) => handleChange('region', value)}>
                    <SelectTrigger className="border-meat-cream focus:border-meat-red">
                      <SelectValue placeholder="Select your region" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-meat-cream">
                      <SelectItem value="gauteng">Gauteng</SelectItem>
                      <SelectItem value="western-cape">Western Cape</SelectItem>
                      <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                      <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                      <SelectItem value="free-state">Free State</SelectItem>
                      <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                      <SelectItem value="limpopo">Limpopo</SelectItem>
                      <SelectItem value="north-west">North West</SelectItem>
                      <SelectItem value="northern-cape">Northern Cape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="city" className="text-meat-brown">Town/City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className="border-meat-cream focus:border-meat-red"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-meat-red hover:bg-meat-darkred text-white py-3 text-lg transition-all duration-300"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
