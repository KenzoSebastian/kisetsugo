import SoalSection from "@/components/Section/SoalSection";

const NatsuSoal3 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/natsu.png")}
      soal={require("@/assets/images/latihan/soal3-natsu.png")}
      opsiA={require("@/assets/images/opsi/natsu/opsi-3a.png")}
      opsiB={require("@/assets/images/opsi/natsu/opsi-3b.png")}
      opsiC={require("@/assets/images/opsi/natsu/opsi-3c.png")}
      opsiD={require("@/assets/images/opsi/natsu/opsi-3d.png")}
      correctAnswer="D"
      weather="natsu"
      type="type1"
      nomorSoal={3}
    />
  );
};

export default NatsuSoal3;
