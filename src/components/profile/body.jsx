import React from "react";
import { personalUrl } from "../../static/data";

const Profile = () => {
  return (
    <div className="pt-10">
      Address: <br />
      Palmerah, Jakarta Barat <br />
      Education: <br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href={personalUrl.gmailMe}>andrel.sitanggang@gmail.com</a> <br />
      D3 Gadjah Mada University, 2013 - 2017<br />
      S1 Informatics Engineering, 2018 - Now <br />
      Hobby: <br />
      Reading <br />
      Swimming <br />
      Motorcycle Riding <br />
      Current company <br />
      PT Distribusi Indonesia Unggul <br />
      Referrences<br />
      Irfan Maulana - Head Of Technology Tokodistributor.com <br />
      Professional Sosial Media <br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href={personalUrl.lilnkedin}>https://www.linkedin.com/in/sitanggangandrel/</a> <br />
      Sosmed Link: <br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href={personalUrl.twitter}>https://twitter.com/functionandrel</a> <br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href={personalUrl.facebook}>https://id-id.facebook.com/people/Andrel-Karunia-Sitanggang/100004816399261</a> <br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href={personalUrl.instagram}>https://www.instagram.com/andrelst.g</a> <br />
      Kelebihan: <br />
      1. Jujur <br />
      2. Disiplin <br />
      3. Integritas <br />
      4. Loyal <br />
      Kekurangan: <br />
      1. Overthinking <br />
      2. Fokus Berlebihan Pada Detail <br />
      3. Kurang Sabaran <br />
      4. Mudah kecewa <br />
    </div>
  )
};

export default Profile;