import { Building2, ClipboardCheck, ShieldCheck, Factory, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const services: Service[] = [
{
  id: "company-establishment",
  title: "Company Establishment",
  summary: "Set up the right legal entity to operate in Egypt's pharmaceutical and food sectors.",
  description:
  "We guide you through choosing and registering the legal structure that fits your business, and prepare the entity for the regulatory licences that follow.",
  icon: Building2,
  items: [
  "Sole proprietorships",
  "Partnerships",
  "Limited liability companies (LLCs)",
  "Joint-stock companies"]

},
{
  id: "product-registration",
  title: "Product Registration",
  summary: "Complete registration dossiers for EDA and NFSA across every major product category.",
  description:
  "From dossier preparation to final approval, we manage submissions, follow-ups and authority queries so your products reach the market without avoidable delays.",
  icon: ClipboardCheck,
  items: [
  "Human pharmaceuticals",
  "Herbal products",
  "Biologics",
  "Cosmetics",
  "Medical devices",
  "Biocidal products",
  "Veterinary products",
  "Food supplements",
  "Sports nutrition"]

},
{
  id: "licensing",
  title: "Licensing & Regulatory Procedures",
  summary: "Site licences, certificates, studies and post-marketing obligations, handled end to end.",
  description:
  "We handle the licences, certificates and technical procedures that keep your sites and products compliant through every stage of their lifecycle.",
  icon: ShieldCheck,
  items: [
  "Manufacturing site licensing",
  "Store and warehouse licensing",
  "Importer register",
  "Bioequivalence studies",
  "Export certificates",
  "Price certificates",
  "NODCAR analysis",
  "Stability studies",
  "Pharmacovigilance"]

},
{
  id: "toll-manufacturing",
  title: "Toll Manufacturing & Product Coordination",
  summary: "Connect with licensed manufacturers and coordinate production from brief to batch.",
  description:
  "We match you with qualified toll manufacturers in Egypt and coordinate the technical, regulatory and logistical details between all parties.",
  icon: Factory,
  items: [
  "Sourcing licensed toll manufacturers",
  "Contract and technical transfer coordination",
  "Regulatory alignment of manufactured products",
  "Ongoing production follow-up"]

}];