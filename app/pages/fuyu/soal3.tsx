import SoalSection from "@/components/Section/SoalSection";

const FuyuSoal3 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      soal={require("@/assets/images/latihan/soal3-fuyu.png")}
      opsiA={require("@/assets/images/opsi/fuyu/opsi-3a.png")}
      opsiB={require("@/assets/images/opsi/fuyu/opsi-3b.png")}
      opsiC={require("@/assets/images/opsi/fuyu/opsi-3c.png")}
      opsiD={require("@/assets/images/opsi/fuyu/opsi-3d.png")}
      correctAnswer="D"
      weather="fuyu"
      type="type1"
      nomorSoal={3}
    />
  );
};

export default FuyuSoal3;
