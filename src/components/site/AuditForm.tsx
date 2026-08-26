import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Jane Miller", autoComplete: "name" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "jane@company.com",
    autoComplete: "email",
  },
  {
    id: "website",
    label: "Website URL",
    type: "url",
    placeholder: "https://yourcompany.com",
    autoComplete: "url",
  },
  {
    id: "business",
    label: "Business Name",
    type: "text",
    placeholder: "Your Company LLC",
    autoComplete: "organization",
  },
];

export function AuditForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Request received", {
        description: "We'll send your free audit shortly.",
      });
    }, 600);
  }

  return (
    <div className="surface-panel rounded-3xl p-7 sm:p-9">
      <h3 className="text-xl font-semibold">Claim your free audit</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Four fields. That's all we need to get started.
      </p>
      <form onSubmit={onSubmit} className="mt-7 space-y-5">
        {fields.map((f) => (
          <div key={f.id} className="space-y-2">
            <Label htmlFor={`audit-${f.id}`}>{f.label}</Label>
            <Input
              id={`audit-${f.id}`}
              name={f.id}
              type={f.type}
              required
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              className="h-11 bg-background/60"
            />
          </div>
        ))}
        <Button type="submit" variant="gold" size="xl" className="w-full" disabled={submitting}>
          {submitting ? "Sending..." : "Claim My Free Audit"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          No cost, no obligation. We never share your details.
        </p>
      </form>
    </div>
  );
}
