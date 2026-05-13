import Script from "next/script";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://asksarahconner.com/#organization",
        "name": "Sarah Conner & Pate Stevens - AskSarahConner.com",
        "url": "https://asksarahconner.com",
        "logo": "https://asksarahconner.com/ASC-transparent-logo.png",
        "image": "https://asksarahconner.com/Sarah-Conner.webp",
        "description": "Real Trends Top 1.5% luxury real estate team in Southern California with over $1 Billion in closed transactions. Specializing in the Malibu to Palm Desert pipeline, investment properties, and value-add design/renovations.",
        "telephone": "+1-310-871-7600",
        "email": "sarah@asksarahconner.com",
        "sameAs": [
          "https://www.instagram.com/asksarahconner/",
          "https://www.facebook.com/sarahbethconner/",
          "https://www.linkedin.com/in/sarah-beth-rena-conner-22776620/",
          "https://www.theagencyre.com/agent/sarah-conner"
        ],
        "employee": [
          {
            "@type": "Person",
            "name": "Sarah Conner",
            "jobTitle": "Real Estate Advisor"
          },
          {
            "@type": "Person",
            "name": "Pate Stevens",
            "jobTitle": "Real Estate Advisor"
          }
        ],
        "department": [
          {
            "@type": "LocalBusiness",
            "name": "The Agency — Beverly Hills & Malibu",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "331 Foothill Rd #100",
              "addressLocality": "Beverly Hills",
              "addressRegion": "CA",
              "postalCode": "90210"
            }
          },
          {
            "@type": "LocalBusiness",
            "name": "The Agency — Palm Desert",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "73-545 El Paseo #2504",
              "addressLocality": "Palm Desert",
              "addressRegion": "CA",
              "postalCode": "92260"
            }
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}