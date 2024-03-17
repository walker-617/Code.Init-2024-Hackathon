import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Home() {
  const [term, setTerm] = useState("plain");

  useEffect(() => {
    changeTerm(term);
    const curr = document.getElementById(term);
    curr.style.backgroundColor = "black";
    curr.style.color = "white";
    curr.style.border = "2px solid black";
  }, []);

  const descriptions = {
    plain:
      "Plaintext is the original, unencrypted message or data that is readable and understandable by humans, serving as the input for encryption algorithms.It represents the information in its natural form before any cryptographic operations have been applied to conceal its content.",
    key: "A key is a piece of information, typically a string of characters, used to control the cryptographic operations of encryption and decryption, ensuring the security and confidentiality of data by enabling authorized access and preventing unauthorized access. Keys are essential components in cryptographic systems, determining the specific transformation applied to plaintext to produce ciphertext and vice versa.",
    cipher:
      "Ciphertext is the encrypted form of plaintext, resulting from applying cryptographic algorithms to obscure the original message's content. It appears as unintelligible and unreadable data, ensuring confidentiality and security during transmission or storage without revealing the underlying information.",
    encrypt:
      "Encryption is the process of converting plaintext into ciphertext using an algorithm and a key, making it unreadable to unauthorized users. Decryption reverses this process, transforming ciphertext back into plaintext using the same algorithm and key. This ensures data confidentiality and security during transmission or storage.",
    decrypt:
      "Decryption is the process of converting ciphertext back into plaintext using the appropriate algorithm and key, essentially reversing the encryption process to retrieve the original message or data. It ensures that authorized users can access and understand the information that was encrypted.",
  };

  function changeTerm(s) {
    if (s == term) {
      return;
    }
    const prev = document.getElementById(term);
    prev.style.backgroundColor = "white";
    prev.style.color = "black";
    prev.style.border = "2px solid lightgrey";
    const curr = document.getElementById(s);
    curr.style.backgroundColor = "black";
    curr.style.color = "white";
    curr.style.border = "2px solid black";
    setTerm(s);
  }

  return (
    <div className="home">
      <div className="main-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Cipher Viz")
              .start();
          }}
        />
      </div>
      <div className="description">
        Dive into the realm of cryptography with our interactive web
        application, unveiling the secrets of the PlayFair Cipher. Unravel the
        enigmatic veil of encryption as you navigate through the intricate
        patterns of this age-old cryptographic technique. Join us on a
        captivating adventure, where knowledge meets fascination, and explore
        the boundless possibilities of the PlayFair Cipher.
      </div>
      <div className="section-title">Why CRYPTOGRAPHY?</div>
      <div className="description">
        Encryption scrambles data into a format unreadable without the
        corresponding key. It ensures privacy and security during data
        transmission or storage. Algorithms transform plaintext into ciphertext,
        making it inaccessible to unauthorized parties. Only those with the
        decryption key can revert ciphertext to its original form. Encryption is
        fundamental in safeguarding sensitive information.
      </div>
      <div className="section-title">TERMINOLOGY</div>
      <div className="terms">
        <div className="terms-section">
          <div
            className="term"
            id="plain"
            onClick={() => {
              changeTerm("plain");
            }}
          >
            Plain&nbsp;Text
          </div>
          <div
            className="term"
            id="key"
            onClick={() => {
              changeTerm("key");
            }}
          >
            Key
          </div>
          <div
            className="term"
            id="cipher"
            onClick={() => {
              changeTerm("cipher");
            }}
          >
            Cipher&nbsp;Text
          </div>
          <div
            className="term"
            id="encrypt"
            onClick={() => {
              changeTerm("encrypt");
            }}
          >
            Encryption
          </div>
          <div
            className="term"
            id="decrypt"
            onClick={() => {
              changeTerm("decrypt");
            }}
          >
            Decryption
          </div>
        </div>
        <div className="term-description">{descriptions[term]}</div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;
