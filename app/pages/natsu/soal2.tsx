import SoalSection from "@/components/Section/SoalSection";

const NatsuSoal2 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/natsu.png")}
      soal={require("@/assets/images/latihan/soal2-natsu.png")}
      opsiA={require("@/assets/images/opsi/natsu/opsi-2a.png")}
      opsiB={require("@/assets/images/opsi/natsu/opsi-2b.png")}
      opsiC={require("@/assets/images/opsi/natsu/opsi-2c.png")}
      opsiD={require("@/assets/images/opsi/natsu/opsi-2d.png")}
      correctAnswer="A"
      weather="natsu"
      type="type2"
      nomorSoal={2}
    />
  );
};

export default NatsuSoal2;
