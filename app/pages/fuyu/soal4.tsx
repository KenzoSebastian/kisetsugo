import SoalSection from "@/components/Section/SoalSection";

const FuyuSoal4 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      soal={require("@/assets/images/latihan/soal4-fuyu.png")}
      opsiA={require("@/assets/images/opsi/fuyu/opsi-3a.png")}
      opsiB={require("@/assets/images/opsi/fuyu/opsi-3b.png")}
      opsiC={require("@/assets/images/opsi/fuyu/opsi-3c.png")}
      opsiD={require("@/assets/images/opsi/fuyu/opsi-3d.png")}
      correctAnswer="A"
      weather="fuyu"
      type="type1"
      nomorSoal={4}
    />
  );
};

export default FuyuSoal4;
