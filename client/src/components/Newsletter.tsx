import { useState } from 'react';
import { InputEnhanced } from '@/components/ui/InputEnhanced';
import { ButtonEnhanced } from '@/components/ui/ButtonEnhanced';
import { toast } from 'sonner';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, send to backend
      console.log('Newsletter signup:', email);

      setIsSuccess(true);
      toast.success('Danke! Sie erhalten bald unseren Newsletter.');

      // Reset after 3 seconds
      setTimeout(() => {
        setEmail('');
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error('Fehler beim Anmelden');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-500 mb-3" />
        <p className="text-foreground font-semibold">Anmeldung erfolgreich!</p>
        <p className="text-sm text-muted-foreground">
          Bestätigungsmail wurde an {email} gesendet
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <InputEnhanced
          type="email"
          placeholder="ihre@email.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
      </div>
      <ButtonEnhanced
        type="submit"
        variant="primary"
        size="md"
        isLoading={isSubmitting}
        className="sm:w-auto"
      >
        <Mail className="w-4 h-4 mr-2" />
        Abonnieren
      </ButtonEnhanced>
    </form>
  );
}
