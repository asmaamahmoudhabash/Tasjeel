import { MessagesSquareIcon, FileTextIcon, SendIcon, RefreshCwIcon, RocketIcon, type LucideIcon } from "lucide-react";

export const contact = {
  address: "10 Mohamed El Nadi Street, Makram Ebeid, Nasr City, Cairo, Egypt",
  email: "clinicopharmaceutical@gmail.com",
  phones: [
  { display: "010 6579 7026", href: "tel:+201065797026" },
  { display: "010 6163 0399", href: "tel:+201061630399" }],

  mapQuery: "Mohamed El Nadi Street, Makram Ebeid, Nasr City, Cairo, Egypt"
};

export const stats = [
{ value: 15, suffix: "+", label: "Years of regulatory experience" },
{ value: 200, suffix: "+", label: "Clients served" },
{ value: 2, suffix: "", label: "Authorities: EDA & NFSA" },
{ value: 4, suffix: "", label: "Integrated service areas" }];


export const categories = [
"Pharmaceuticals",
"Cosmetics",
"Medical Devices",
"Food Supplements",
"Veterinary",
"Biologics"];


export const approvals = [
{
  abbr: "EDA",
  name: "Egyptian Drug Authority",
  type: "Product registration",
  steps: ["Submitted", "Reviewed", "Approved"]
},
{
  abbr: "NFSA",
  name: "National Food Safety Authority",
  type: "Food supplement registration",
  steps: ["Submitted", "Reviewed", "Approved"]
}];


export type ProcessStep = {title: string;text: string;icon: LucideIcon;};

export const processSteps: ProcessStep[] = [
{ title: "Consultation", text: "We review your product, company status and goals, and map the right regulatory pathway.", icon: MessagesSquareIcon },
{ title: "Dossier preparation", text: "We compile and check every document against EDA or NFSA requirements.", icon: FileTextIcon },
{ title: "Submission", text: "We submit the file to the correct authority department and track its reference.", icon: SendIcon },
{ title: "Follow-up with the authority", text: "We answer queries, attend committees and keep you updated at every stage.", icon: RefreshCwIcon },
{ title: "Approval and launch", text: "We secure approval and support your launch and post-marketing obligations.", icon: RocketIcon }];


export const reasons = [
{
  title: "Deep authority know-how",
  text: "More than 15 years working directly with the Egyptian Drug Authority and the National Food Safety Authority."
},
{
  title: "One partner, full lifecycle",
  text: "From company setup to registration, licensing and post-marketing — no hand-offs between multiple consultants."
},
{
  title: "Pharmacist-led team",
  text: "Every file is prepared and reviewed by qualified pharmacists who understand the science behind the dossier."
},
{
  title: "Clear, proactive updates",
  text: "You always know where your file stands, what the authority needs next, and how long it should take."
}];


export const team = [
{ name: "Dr. Olfat Mahmoud", role: "General Manager", initials: "OM" },
{ name: "Dr. Sara Amir", role: "Regulatory Affairs Manager", initials: "SA" },
{ name: "Dr. Mohamed Fathey", role: "Regulatory Affairs Supervisor", initials: "MF" }];


export const values = [
{ title: "Accuracy", text: "Dossiers prepared right the first time, reducing queries and resubmissions." },
{ title: "Integrity", text: "Transparent advice on timelines, requirements and realistic outcomes." },
{ title: "Commitment", text: "We follow every file through to approval, and stay with you after it." }];


export const authorities = [
{
  abbr: "EDA",
  name: "Egyptian Drug Authority",
  text: "Registration and licensing of pharmaceuticals, biologics, herbal products, cosmetics, medical devices, biocidal and veterinary products."
},
{
  abbr: "NFSA",
  name: "National Food Safety Authority",
  text: "Registration of food supplements and sports nutrition products, and related food safety procedures."
}];


export const catalogueLaunch = "2027-03-01T09:00:00+02:00";