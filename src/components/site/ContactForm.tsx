import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { productos } from "@/data/content";
import { cn } from "@/lib/utils";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo."),
  empresa: z.string().optional(),
  correo: z.string().email("Ingresa un correo electrónico válido."),
  telefono: z.string().min(6, "Ingresa un teléfono de contacto."),
  ciudad: z.string().min(2, "Ingresa tu ciudad."),
  tipoCliente: z.string().min(1, "Selecciona el tipo de cliente."),
  producto: z.string().min(1, "Selecciona un producto de interés."),
  cantidad: z.string().optional(),
  asunto: z.string().min(3, "Ingresa el asunto de tu consulta."),
  mensaje: z.string().min(10, "Cuéntanos brevemente qué necesitas."),
});

export type ContactoFormValues = z.infer<typeof schema>;

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

const field =
  "mt-2 h-11 rounded-md border-border bg-card focus-visible:ring-1 focus-visible:ring-gold";

export function ContactForm({ productoInicial }: { productoInicial?: string }) {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactoFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      empresa: "",
      correo: "",
      telefono: "",
      ciudad: "",
      tipoCliente: "",
      producto: productoInicial ?? "",
      cantidad: "",
      asunto: "",
      mensaje: "",
    },
  });

  // TODO: conectar con un servicio de email, CRM o backend.
  const onSubmit = async (values: ContactoFormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.info("Consulta enviada:", values);
    setEnviado(true);
    reset({ ...values, asunto: "", mensaje: "" });
  };

  if (enviado) {
    return (
      <div className="rounded-2xl border border-leaf/30 bg-card p-10 text-center shadow-soft">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold-soft/40 text-leaf">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl text-primary">Consulta enviada</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos
          contigo pronto.
        </p>
        <Button variant="outlineLeaf" className="mt-7" onClick={() => setEnviado(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  const Error = ({ msg }: { msg?: string }) =>
    msg ? (
      <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
        {msg}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input id="nombre" className={field} autoComplete="name" {...register("nombre")} />
          <Error msg={errors.nombre?.message} />
        </div>
        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <Input id="empresa" className={field} autoComplete="organization" {...register("empresa")} />
        </div>
        <div>
          <Label htmlFor="correo">Correo electrónico *</Label>
          <Input id="correo" type="email" className={field} autoComplete="email" {...register("correo")} />
          <Error msg={errors.correo?.message} />
        </div>
        <div>
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" type="tel" className={field} autoComplete="tel" {...register("telefono")} />
          <Error msg={errors.telefono?.message} />
        </div>
        <div>
          <Label htmlFor="ciudad">Ciudad *</Label>
          <Input id="ciudad" className={field} autoComplete="address-level2" {...register("ciudad")} />
          <Error msg={errors.ciudad?.message} />
        </div>
        <div>
          <Label htmlFor="tipoCliente">Tipo de cliente *</Label>
          <select
            id="tipoCliente"
            className={cn(field, "w-full border px-3 text-sm")}
            {...register("tipoCliente")}
          >
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <Error msg={errors.tipoCliente?.message} />
        </div>
        <div>
          <Label htmlFor="producto">Producto de interés *</Label>
          <select
            id="producto"
            className={cn(field, "w-full border px-3 text-sm")}
            {...register("producto")}
          >
            <option value="">Selecciona una opción</option>
            {productos.map((p) => (
              <option key={p.slug} value={p.nombre}>
                {p.nombre}
              </option>
            ))}
            <option value="Otro">Otro</option>
          </select>
          <Error msg={errors.producto?.message} />
        </div>
        <div>
          <Label htmlFor="cantidad">Cantidad aproximada</Label>
          <Input id="cantidad" className={field} placeholder="Ej. 50 kg" {...register("cantidad")} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="asunto">Asunto *</Label>
          <Input id="asunto" className={field} {...register("asunto")} />
          <Error msg={errors.asunto?.message} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="mensaje">Mensaje *</Label>
          <Textarea
            id="mensaje"
            rows={5}
            className="mt-2 rounded-md border-border bg-card focus-visible:ring-1 focus-visible:ring-gold"
            {...register("mensaje")}
          />
          <Error msg={errors.mensaje?.message} />
        </div>
      </div>

      <Button type="submit" variant="gold" size="xl" className="mt-8 w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="size-4" aria-hidden="true" />
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Los campos marcados con * son obligatorios.
      </p>
    </form>
  );
}
