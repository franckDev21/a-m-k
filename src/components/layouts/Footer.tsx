import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 font-light">
      <div className="container flex space-x-4 mx-auto ">
        <div className="w-1/3">
          <h1 className="font-bold mb-2 text-xl">SOCIETE</h1>
          <p>ADAA CERTIF® entreprise du groupe ADAA SAS</p>
        </div>
        <div className="w-1/3">
          <h1 className="font-bold mb-2 text-xl">FORMATIONS</h1>
          <ul>
            <li>
              - Certification Professional Management Professional PMP® du PMI®
            </li>
            <li>- Certification PSM 1</li>
            <li>- Certification ITIL 4</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h1 className="font-bold mb-2 text-xl">ADRESSES ET CONTACTS</h1>
          <ul>
            <li>- Hôtel SERENA Bali, Douala - Cameroun</li>
            <li>- Immeuble Air France à Bastos, Yaoundé - Cameroun</li>
            <li>- Polyclinique des 02 plateaux, Abidjan - Côte d’Ivoire</li>
            <li>- Téléphones : +237 678 35 32 45 +225 014 125 89 73</li>
            <li>- E-mail: hello@adaacertif.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
