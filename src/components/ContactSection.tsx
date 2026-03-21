import { useForm } from "@formspree/react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const errorMessageMap: Record<string, string> = {
  TYPE_EMAIL: "Ingresa un correo valido.",
  REQUIRED_FIELD_MISSING: "Este campo es obligatorio.",
};

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^\d{10}$/;

const ContactSection = () => {
  const [state, submitToFormspree] = useForm("mwvrzynp");
  const assetBase = import.meta.env.BASE_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState<{ name: boolean; email: boolean; phone: boolean; message: boolean }>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const getNameError = () => {
    if (!touched.name) return null;
    return name.trim().length > 0 ? null : "Ingresa tu nombre.";
  };

  const getEmailError = () => {
    if (!touched.email || email.length === 0) return null;
    return emailRegex.test(email) ? null : "Ingresa un correo valido, por ejemplo: nombre@empresa.com";
  };

  const getPhoneError = () => {
    if (!touched.phone || phone.length === 0) return null;
    return phoneRegex.test(phone) ? null : "Ingresa un numero de 10 digitos";
  };

  const getMessageError = () => {
    if (!touched.message) return null;
    return message.trim().length > 0 ? null : "Ingresa un mensaje.";
  };

  const getFieldErrors = (field: string) =>
    (state.errors?.getFieldErrors(field) ?? []).map(
      (error) => errorMessageMap[error.code] ?? error.message ?? "Revisa este campo.",
    );

  const formErrors = (state.errors?.getFormErrors() ?? []).map(
    (error) => errorMessageMap[error.code] ?? error.message ?? "No se pudo enviar el formulario.",
  );

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.trim());
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextTouched = { name: true, email: true, phone: true, message: true };
    setTouched(nextTouched);

    const form = event.currentTarget;
    const nameIsValid = name.trim().length > 0;
    const emailIsValid = emailRegex.test(email);
    const phoneIsValid = phone.length === 0 || phoneRegex.test(phone);
    const messageIsValid = message.trim().length > 0;

    if (!form.checkValidity() || !nameIsValid || !emailIsValid || !phoneIsValid || !messageIsValid) {
      form.reportValidity();
      return;
    }

    void submitToFormspree(event);
  };

  const nameError = getNameError();
  const emailError = getEmailError();
  const phoneError = getPhoneError();
  const messageError = getMessageError();

  return (
    <section id="contacto" className="bg-muted/50 py-24 lg:py-32">
      <div className="container section-padding">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contacto</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Solicite su presupuesto sin compromiso</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cuentenos sobre su proyecto o necesidad y nuestro equipo se pondra en contacto con usted a la brevedad.
            </p>

            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-accent/10 p-3 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefono</p>
                    <p className="font-medium">+52 (999) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-accent/10 p-3 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contacto@rftservicios.com</p>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[2rem] border bg-background p-3 shadow-xl md:mx-0 md:flex-shrink-0">
                <img
                  src={`${assetBase}4.PNG`}
                  alt="Atencion y soporte tecnico de RFT Soluciones"
                  className="aspect-square w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {state.succeeded ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center">
                <div>
                  <div className="mx-auto mb-4 inline-flex rounded-full bg-green-100 p-4 text-green-700">
                    <Send className="h-6 w-6" />
                  </div>
                  <p className="font-medium text-green-700">Mensaje enviado con exito.</p>
                  <p className="mt-1 text-sm text-green-600">Te contactaremos pronto.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border bg-background p-8 shadow-sm" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Nombre *</label>
                    <Input
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      value={name}
                      onChange={handleNameChange}
                      onBlur={() => setTouched((current) => ({ ...current, name: true }))}
                      placeholder="Su nombre"
                      className={nameError ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {nameError ? <p className="mt-1 text-sm text-destructive">{nameError}</p> : null}
                    {!nameError && getFieldErrors("name").map((message) => (
                      <p key={message} className="mt-1 text-sm text-destructive">{message}</p>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium">Empresa</label>
                    <Input id="company" name="empresa" maxLength={100} placeholder="Nombre de empresa" />
                    {getFieldErrors("empresa").map((message) => (
                      <p key={message} className="mt-1 text-sm text-destructive">{message}</p>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => setTouched((current) => ({ ...current, email: true }))}
                      placeholder="correo@ejemplo.com"
                      className={emailError ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {emailError ? <p className="mt-1 text-sm text-destructive">{emailError}</p> : null}
                    {!emailError &&
                      getFieldErrors("email").map((message) => (
                        <p key={message} className="mt-1 text-sm text-destructive">{message}</p>
                      ))}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Telefono</label>
                    <Input
                      id="phone"
                      name="telefono"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={phone}
                      onChange={handlePhoneChange}
                      onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
                      placeholder="9991234567"
                      className={phoneError ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {phoneError ? <p className="mt-1 text-sm text-destructive">{phoneError}</p> : null}
                    {!phoneError &&
                      getFieldErrors("telefono").map((message) => (
                        <p key={message} className="mt-1 text-sm text-destructive">{message}</p>
                      ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Mensaje *</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                    onBlur={() => setTouched((current) => ({ ...current, message: true }))}
                    placeholder="Describa su proyecto o necesidad..."
                    className={messageError ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {messageError ? <p className="mt-1 text-sm text-destructive">{messageError}</p> : null}
                  {!messageError && getFieldErrors("message").map((message) => (
                    <p key={message} className="mt-1 text-sm text-destructive">{message}</p>
                  ))}
                </div>

                {formErrors.map((message) => (
                  <p key={message} className="text-sm text-destructive">{message}</p>
                ))}

                <Button
                  type="submit"
                  size="lg"
                  disabled={state.submitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {state.submitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
