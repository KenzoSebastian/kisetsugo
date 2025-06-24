import SoalSection from "@/components/Section/SoalSection";

const AkiSoal3 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/aki.png")}
      soal={require("@/assets/images/latihan/soal3-aki.png")}
      opsiA={require("@/assets/images/opsi/aki/opsi-3a.png")}
      opsiB={require("@/assets/images/opsi/aki/opsi-3b.png")}
      opsiC={require("@/assets/images/opsi/aki/opsi-3c.png")}
      opsiD={require("@/assets/images/opsi/aki/opsi-3d.png")}
      correctAnswer="A"
      weather="aki"
      type="type1"
      nomorSoal={3}
    />
  );
};

export default AkiSoal3;
