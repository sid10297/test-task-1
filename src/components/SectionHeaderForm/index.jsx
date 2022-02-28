import React, { useEffect, useState } from "react";
import Button from "../Button";
import SelectDate from "../SelectDate";
import Select from "../Select";
import "./index.css";
import { getProjects } from "../../apis/project";
import { getGateways } from "../../apis/gateway";
import { createReport } from "../../apis/report";

const SectionHeaderForm = ({ getReportData }) => {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [showError, setShowError] = useState(false);
  const [toMinDate, setToMinDate] = useState(null);
  const [reportParams, setReportParams] = useState({
    to: "",
    from: "",
    projectId: "",
    gatewayId: "",
  });

  useEffect(() => {
    fetchProjects();
    fetchGateways();
  }, []);

  useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 3000);
    }
  }, [showError]);

  const fetchProjects = async () => {
    try {
      const {
        data: { data },
      } = await getProjects();
      const projectOptions = data.map(({ projectId, name }) => ({
        id: projectId,
        name,
      }));
      setProjects(projectOptions);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGateways = async () => {
    try {
      const {
        data: { data },
      } = await getGateways();
      const gatewayOptions = data.map(({ gatewayId, name }) => ({
        id: gatewayId,
        name,
      }));
      setGateways(gatewayOptions);
    } catch (error) {
      console.log(error);
    }
  };

  const onSelect = ({ name, value }) => {
    if (name === "from") {
      setToMinDate(value);
    }
    setReportParams({ ...reportParams, [name]: value });
  };

  const compare = (reportParams) => {
    const { to, from } = reportParams;
    if (to > from) {
      return true;
    } else if (from > to) {
      return false;
    } else {
      return true;
    }
  };

  const generateReport = async (e) => {
    e.preventDefault();
    try {
      const isDateValid = compare(reportParams);
      if (reportParams.to.length === 0 || reportParams.from.length === 0) {
        setShowError(true);
        return;
      } else if (isDateValid) {
        const {
          data: { data },
        } = await createReport(reportParams);
        getReportData(data, reportParams);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form_wrapper'>
      <form className='section_form' onSubmit={generateReport}>
        <div className='m'>
          <Select
            defaultOption={{ name: "All projects", value: "" }}
            placeholder='Select project'
            name='projectId'
            options={projects}
            onSelect={onSelect}
          />
        </div>
        <div className='m'>
          <Select
            defaultOption={{ name: "All gateways", value: "" }}
            placeholder='Select gateway'
            name='gatewayId'
            options={gateways}
            onSelect={onSelect}
          />
        </div>
        <div className='m'>
          <SelectDate
            minDate={new Date("01-01-2020")}
            label='From date'
            name={"from"}
            onSelect={onSelect}
          />
        </div>
        <div className='m'>
          <SelectDate
            minDate={new Date(toMinDate)}
            label='To date'
            name='to'
            onSelect={onSelect}
          />
        </div>
        <Button
          type='submit'
          label='Generate report'
          variant='gen_report_btn'
        />
      </form>
      {showError && <p className='error'>Date fields are mandatory</p>}
    </div>
  );
};

export default SectionHeaderForm;
