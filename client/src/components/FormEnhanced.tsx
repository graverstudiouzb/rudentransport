import { useState } from 'react';
import { InputEnhanced } from '@/components/ui/InputEnhanced';
import { TextareaEnhanced } from '@/components/ui/TextareaEnhanced';
import { ButtonEnhanced } from '@/components/ui/ButtonEnhanced';
import { BadgeEnhanced } from '@/components/ui/BadgeEnhanced';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

interface FormData {
  company: string;
  contact: string;
  email: string;
  phone: string;
  description: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function FormEnhanced() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    company: '',
    contact: '',
    email: '',
    phone: '',
    description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const re = /^[\d\s\-\+\(\)]+$/;
    return phone.length >= 10 && re.test(phone);
  };

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.company.trim()) {
      newErrors.company = 'Unternehmensname ist erforderlich';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Ansprechpartner ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonnummer ist erforderlich';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Beschreibung ist erforderlich';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Bitte beschreiben Sie Ihre Situation ausführlicher';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    } else {
      toast.error('Bitte füllen Sie alle erforderlichen Felder aus');
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) {
      toast.error('Bitte füllen Sie alle erforderlichen Felder aus');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, send to backend
      console.log('Form submitted:', formData);

      setIsSuccess(true);
      toast.success('Anfrage erfolgreich versendet!');

      // Reset after 3 seconds
      setTimeout(() => {
        setFormData({
          company: '',
          contact: '',
          email: '',
          phone: '',
          description: '',
        });
        setStep(1);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error('Fehler beim Versenden der Anfrage');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToStep1 = () => {
    setStep(1);
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Anfrage erfolgreich versendet!
        </h3>
        <p className="text-muted-foreground mb-6">
          Vielen Dank! Wir werden uns in den nächsten 2 Stunden mit Ihnen in Verbindung setzen.
        </p>
        <p className="text-sm text-muted-foreground">
          Bestätigungsmail wurde an {formData.email} gesendet
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        <BadgeEnhanced variant={step >= 1 ? 'default' : 'outline'}>
          Schritt 1
        </BadgeEnhanced>
        <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-border'}`} />
        <BadgeEnhanced variant={step >= 2 ? 'default' : 'outline'}>
          Schritt 2
        </BadgeEnhanced>
      </div>

      <form onSubmit={step === 1 ? handleStep1Submit : handleStep2Submit} className="space-y-6">
        {step === 1 ? (
          <>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Schnelle Informationen
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Dauert nur 30 Sekunden
              </p>
            </div>

            <InputEnhanced
              label="Unternehmensname"
              name="company"
              placeholder="Ihr Unternehmen"
              value={formData.company}
              onChange={handleInputChange}
              error={errors.company}
              required
            />

            <InputEnhanced
              label="Ansprechpartner"
              name="contact"
              placeholder="Ihr Name"
              value={formData.contact}
              onChange={handleInputChange}
              error={errors.contact}
              required
            />

            <InputEnhanced
              label="E-Mail"
              name="email"
              type="email"
              placeholder="ihre@email.de"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
            />

            <ButtonEnhanced
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Weiter zu Schritt 2
            </ButtonEnhanced>
          </>
        ) : (
          <>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Erzählen Sie uns mehr
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Details zu Ihrer Situation
              </p>
            </div>

            <InputEnhanced
              label="Telefonnummer"
              name="phone"
              type="tel"
              placeholder="+49 176 60445403"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              required
            />

            <TextareaEnhanced
              label="Beschreibung"
              name="description"
              placeholder="Beschreiben Sie Ihre Zugangsituation, den Umfang des Transports und besondere Anforderungen..."
              value={formData.description}
              onChange={handleInputChange}
              error={errors.description}
              required
            />

            <div className="flex gap-3">
              <ButtonEnhanced
                type="button"
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={handleBackToStep1}
              >
                Zurück
              </ButtonEnhanced>
              <ButtonEnhanced
                type="submit"
                variant="primary"
                size="lg"
                className="flex-1"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Wird versendet...' : 'Anfrage versendet'}
              </ButtonEnhanced>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
