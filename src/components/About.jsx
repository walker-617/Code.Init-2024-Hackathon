function About() {
  return (
    <div className="home">
      <div className="content-bar">
        <a href="#history" className="content">
          History
        </a>
        <a href="#description" className="content">
          Description
        </a>
        <a href="#crypt_analysis" className="content">
          Crypt Analysis
        </a>
        <a href="#advantages" className="content">
          Advantages
        </a>
        <a href="#disadvantages" className="content">
          Disadvantages
        </a>
        <a href="#conclusion" className="content">
          Conclusion
        </a>
      </div>
      <div className="name-image">
        <div className="name">PLAYFAIR CIPHER</div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Charles_Wheatstone_-_Project_Gutenberg_etext_13103.jpg"
            className="image"
          />
          <div align="center" style={{ fontWeight: "bold" }}>
            Sir Charles Wheatstone
          </div>
        </div>
      </div>
      <div className="section-title" id="history">
        HISTORY
      </div>
      <div className="description">
        The Playfair cipher, a pioneering cryptographic technique, marked a
        significant milestone by encrypting pairs of letters, a novel approach
        in cryptologic history. Its inception is credited to Sir Charles
        Wheatstone, who developed it for telegraphy's secrecy. However, the
        cipher is named after his friend, Lord Playfair, the first Baron
        Playfair of St. Andrews, who advocated for its adoption. The first
        documented account of the Playfair cipher dates back to a document
        signed by Wheatstone on 26 March 1854. Despite its innovation, the
        cipher faced initial skepticism from the British Foreign Office due to
        perceived complexity. Wheatstone attempted to dispel doubts by asserting
        that three out of four boys in a nearby school could grasp its usage
        within 15 minutes.<div>&nbsp;</div>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nonetheless, the
        Under Secretary of the Foreign Office remained unconvinced, stating that
        while it might be learnable by schoolboys, it would be impractical for
        diplomatic attachés. However, the Playfair cipher found utility in
        tactical communication during conflicts such as the Second Boer War,
        World War I, and World War II. Its appeal stemmed from its ease of use
        and the minimal resources required - merely a pencil and paper sufficed.
        In wartime scenarios, Playfair encryption safeguarded critical yet
        non-urgent information, such as impending artillery barrages or troop
        movements. By the time adversaries decoded these messages, often hours
        later, the information had likely become obsolete, rendering it
        inconsequential. During World War II, various Allied entities, including
        the Government of New Zealand and the Royal Australian Navy
        Intelligence, employed the Playfair cipher extensively for
        communication. It facilitated secure exchanges between New Zealand, the
        Chatham Islands, and Pacific Islands coastwatchers, ensuring vital
        intelligence dissemination while maintaining operational security.
      </div>
      <div className="section-title" id="description">
        DESCRIPTION
      </div>
      <div className="description">
        The Playfair cipher relies on a 5x5 table derived from a keyword or
        phrase, along with four simple rules for encryption. To construct the
        key table, the keyword is written without duplicate letters, followed by
        the remaining alphabet letters (usually omitting "J" or "Q"). The table
        can be filled in a specified pattern, like left to right, or in a
        spiral. Encryption involves breaking the message into pairs of letters
        (digrams) and substituting them using the key table. Odd-length messages
        append an extra letter like "X" to complete the final digram. The
        digram's letters represent opposite corners of a rectangle in the key
        table, and four rules are applied to each pair of plaintext letters:{" "}
        <ul style={{textIndent:0}}>
          <li>
            If both letters are the same, add an "X" after the first letter,
            encrypt the pair, and continue.
          </li>
          <li>
            If the letters are in the same row, replace them with the letters to
            their immediate right.
          </li>
          <li>
            If the letters are in the same column, replace them with the letters
            immediately below.
          </li>
          <li>
            If the letters are neither in the same row nor column, replace them
            with the letters on the same row but at the other pair of corners of
            the rectangle defined by the original pair.
          </li>
        </ul>
        Decryption involves using the inverse of the shift rules, selecting the
        letter to the left or upwards as needed. The last rule remains
        unchanged, as it switches the selected letters of the rectangle to the
        opposite diagonal. The first rule is reversed by dropping any extra
        instances of the chosen insert letter (e.g., "X" or "Q") that don't fit
        the final message.
      </div>
      <div className="section-title" id="crypt_analysis">
        CRYPT ANALYSIS
      </div>
      <div className="description">
        The Playfair cipher, like many classical ciphers, faces vulnerabilities
        when a substantial amount of text is available for analysis. If both
        plaintext and ciphertext are known, obtaining the key becomes relatively
        straightforward. However, even with only the ciphertext available,
        cryptanalysis can be attempted through brute force methods. This
        involves searching through the key space for matches between the
        frequency of digrams in the ciphertext and the known frequency of
        digrams in the assumed language. One notable characteristic of the
        Playfair cipher is its tendency for a digraph and its reverse to decrypt
        to the same letter pattern in the plaintext. This feature simplifies the
        identification of candidate plaintext strings, aiding cryptanalysis
        efforts. By recognizing nearby reversed digraphs in the ciphertext and
        matching them to known plaintext words, possible plaintext strings can
        be generated to construct the key. <div>&nbsp;</div>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An alternative approach to decrypting
        a Playfair cipher involves the shotgun hill climbing method. Starting
        with a random square of letters, minor changes are introduced
        iteratively to improve the candidate plaintext's resemblance to standard
        language. Through this iterative process of mutation and evaluation, a
        close approximation of the plaintext or the actual plaintext itself can
        be obtained. While computationally intensive, this method can
        effectively crack Playfair ciphers with relatively small amounts of
        ciphertext. Additionally, the absence of double-letter digrams, such as
        "EE", in the Playfair ciphertext can indicate the use of this cipher
        method. If statistically significant, this absence suggests the
        encryption method employed. These insights, along with tutorials and
        detailed cryptanalysis examples available in various sources, contribute
        to understanding and breaking the Playfair cipher's
        encryption techniques.
      </div>
      <div className="section-title" id="advantages">
        ADVANTAGES
      </div>
      <div className="description" style={{ textIndent: 0 }}>
        <ul>
          <li>
            Playfair cipher is secure and needs significant efforts to decrypt
            the message, making it relatively difficult to crack. At the same
            time, the complex mathematics behind it makes it equally difficult
            for the receiver to decode the information.
          </li>
          <li>
            As the frequency analysis used for simple substitution cypher
            doesn’t work with the Playfair cypher, it is significantly trickier
            to break. Further, if one decides to undertake frequency analysis,
            it needs much more ciphertext on 25*25 = 625 possible digraphs than
            25 possible monographs in the case of a simple substitution cipher.
          </li>
          <li>
            The encrypting and decrypting data in Playfair cypher is a manual
            method that eliminates the need for a Playfair cypher calculator.
            Without using a Playfair cypher decoder, information can securely
            travel between its source and destination without getting into the
            wrong hands when you implement Playfair cypher encryption-decryption
            in C.
          </li>
        </ul>
      </div>
      <div className="section-title" id="disadvantages">
        DISADVANTAGES
      </div>
      <div className="description" style={{ textIndent: 0 }}>
        <ul>
          <li>
            The Playfair cipher is a symmetric cipher, so it uses the same key
            for encryption and decryption. One can easily crack symmetric
            cryptography through the Playfair cipher program technique. Also,
            the amount of encryption and decryption will be less.
          </li>
          <li>
            One primary disadvantage of Playfair cipher is that you can’t use it
            to transmit massive data.
          </li>
          <li>
            In the Playfair cipher, the substitution is self-inverse. It means
            that the digraph in the ciphertext (AB) and its reverse (BA) have
            corresponding plaintexts, such as RU and UR. Similarly, ciphertexts
            UR and RU have corresponding plaintexts AB and BA. One can easily
            exploit it using frequency analysis, provided he/she knows the
            plaintext language.
          </li>
        </ul>
      </div>
      <div className="section-title" id="conclusion">
        CONCLUSION
      </div>
      <div className="description">
        This guide explains in-depth what Playfair cipher is, its relevance,
        advantages, and disadvantages. Further, with examples, it demonstrates
        the encryption and decryption algorithm of Playfair cipher in
        easy-to-understand language. Playfair cipher is one of the most ancient
        and effective data encryption methods. Further, understanding Playfair
        cipher is the basic foundation of data encryption and machine learning.
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default About;
