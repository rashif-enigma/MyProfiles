import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
        Credential Verify My Certification
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="EC- Council"
          des=" Cybersecurity for Businesses - The Fundamental Edition"
          listItem={["Risk Management","Cyber Insurance"]}
          link="https://codered.eccouncil.org/certificate/eca27343-3083-40e5-a160-bacab3cdf364?logged=true"
        />
        <ArchiveCard
          title="EC- Council"
          des=" Scrum Certification + Scrum Master + Agile Scrum Training"
          listItem={["Scrum Team Accountabilities", "Agile Procedure"]}
          link="https://codered.eccouncil.org/certificate/092772b0-cda2-48e3-9419-9bf92405ea51?logged=true"
        />
        <ArchiveCard
          title="Coursera"
          des=" Business Analysis & Process Management"
          listItem={["Analyze business processes and find solutions to existing business problem"]}
          link="https://www.coursera.org/account/accomplishments/verify/B01434XGFK7G"
        />
        <ArchiveCard
          title="Java (Basic) Certificate"
          des=" It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. You are expected to be proficient in either Java 7 or Java 8."
          listItem={["Java Basic Languange - Hackkerank"]}
          link="https://www.hackerrank.com/certificates/4145fdab808f"
        />
        <ArchiveCard
          title="Rest API (Intermediate) Certificate"
          des=" It covers topics like getting data from an API and process using parameters or paging."
          listItem={["Microservices", "Web API"]}
          link="https://www.hackerrank.com/certificates/21f06b0ff0c1"
        />
        <ArchiveCard
          title="SQL (Basic) Certificate"
          des=" It includes simple queries, relationships, and aggregators."
          listItem={["Databases", "Relationships Databases"]}
          link="https://www.hackerrank.com/certificates/28bccaf0dfb7"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Enigma Camp"
                des=" Go-Lang"
                listItem={["GO Programming Languange"]}
                link="https://www.linkedin.com/in/rashif-zhafir-820791243/details/certifications/1710520681832/single-media-viewer/?profileId=ACoAADxzKFgBolA6jV1ox-jpX4UtXkBnJFhvVT0"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Karir Fest x Danamon"
                des="Junior Bussines Analyst"
                listItem={["Bussines Analyst Procesed", "Bussines Flow"]}
                link="https://www.linkedin.com/in/rashif-zhafir-820791243/details/certifications/1635551230780/single-media-viewer/?profileId=ACoAADxzKFgBolA6jV1ox-jpX4UtXkBnJFhvVT0"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
             
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
