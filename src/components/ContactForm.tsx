
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    enquiryType: '',
    message: '',
    region: '',
    town: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Contact request submitted",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      enquiryType: '',
      message: '',
      region: '',
      town: ''
    });
  };

  return (
    <section className="py-20 bg-secondary/40" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-secondary p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 text-primary">Trade Enquiries</h2>
              <ul className="list-disc pl-5 space-y-4 mb-8">
                <li className="text-gray-800">
                  PrimeCuts delivers free of charge to the commercial trade nationwide only.
                </li>
                <li className="text-gray-800">
                  We unfortunately do not do home deliveries.
                </li>
                <li className="text-gray-800">
                  We are however happy to direct you to your closest outlet if you are a consumer looking for one of our products.
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-primary">Contact Us</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" size={20} />
                  <span>Tel: <a href="tel:+27118277644" className="hover:text-primary">+27 (11) 827 7644</a></span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-primary" size={20} />
                  <span>Email: <a href="mailto:sales@primecuts.co.za" className="hover:text-primary">sales@primecuts.co.za</a></span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" size={20} />
                  <span>WhatsApp us: <a href="https://wa.me/27828920836" className="hover:text-primary">+27 82 892 0836</a></span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-2 text-primary">Visit Us</h3>
                <p className="text-gray-800">47 Machine Street, Elsburg, Germiston, Johannesburg, South Africa</p>
                
                <h3 className="text-2xl font-bold mb-2 text-primary">Mail Us</h3>
                <p className="text-gray-800">PO Box 9266, Elsburg, 1407</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-primary">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-gray-300 bg-secondary/20"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-gray-300 bg-secondary/20"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300 bg-secondary/20"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-300 bg-secondary/20"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-gray-300 bg-secondary/20"
                  />
                </div>
                <div>
                  <Select
                    value={formData.enquiryType}
                    onValueChange={(value) => handleSelectChange('enquiryType', value)}
                  >
                    <SelectTrigger className="border-gray-300 bg-secondary/20">
                      <SelectValue placeholder="Enquiry Type*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trade">Trade Enquiry</SelectItem>
                      <SelectItem value="retail">Retail Enquiry</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="I am interested in..."
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gray-300 bg-secondary/20"
                    rows={4}
                  />
                </div>
                <div>
                  <Select
                    value={formData.region}
                    onValueChange={(value) => handleSelectChange('region', value)}
                  >
                    <SelectTrigger className="border-gray-300 bg-secondary/20">
                      <SelectValue placeholder="Choose your region*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gauteng">Gauteng</SelectItem>
                      <SelectItem value="western-cape">Western Cape</SelectItem>
                      <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                      <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                      <SelectItem value="free-state">Free State</SelectItem>
                      <SelectItem value="north-west">North West</SelectItem>
                      <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                      <SelectItem value="limpopo">Limpopo</SelectItem>
                      <SelectItem value="northern-cape">Northern Cape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    name="town"
                    placeholder="Town/City"
                    value={formData.town}
                    onChange={handleChange}
                    className="border-gray-300 bg-secondary/20"
                    rows={2}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
