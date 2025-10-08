import GlassCard from "../../elements/GlassCard";

type FeaturesProps = {
  header: string;
  icon: React.ReactNode;
};

const FeatureBox: React.FC<FeaturesProps> = ({ header, icon }) => {
  return (
    <div className="mt-1 position-relative">
      <GlassCard
        header={header}
        icon={icon}
        height={160}
        width={350}
        className="mt-3"
      />
    </div>
  );
};

export default FeatureBox;
