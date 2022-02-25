import React, { useEffect, useState } from "react";
import Button from "../Button";
import SelectDate from "../SelectDate";
import Select from "../Select";
import "./index.css";
import { getProjects } from "../../apis/project";
import { getGateways } from "../../apis/gateway";
import { createReport } from "../../apis/report";

const SectionHeaderForm = () => {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [report, setReport] = useState(null);
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

  const fetchProjects = async () => {
    const {
      data: { data },
    } = await getProjects();
    const projectOptions = data.map(({ projectId, name }) => ({
      id: projectId,
      name,
    }));
    setProjects(projectOptions);
  };

  const fetchGateways = async () => {
    const {
      data: { data },
    } = await getGateways();
    const gatewayOptions = data.map(({ gatewayId, name }) => ({
      id: gatewayId,
      name,
    }));
    setGateways(gatewayOptions);
  };

  const onSelect = ({ name, value }) =>
    setReportParams({ ...reportParams, [name]: value });

  const generateReport = async (e) => {
    e.preventDefault();
    const {data: {data}} = await createReport(reportParams);
    console.log('Generated report: ', data);
  };

  return (
    <form className='section_form' onSubmit={generateReport}>
      <div className='select_projects m'>
        <Select name='projectId' options={projects} onSelect={onSelect} />
      </div>
      <div className='select_gateways m'>
        <Select name='gatewayId' options={gateways} onSelect={onSelect} />
      </div>
      <div className='select_start_date m'>
        <SelectDate label='From date' name={'from'} onSelect={onSelect} />
      </div>
      <div className='select_end_date m'>
        <SelectDate label='To date' name='to' onSelect={onSelect} />
      </div>
      <Button type='submit' label='Generate report' variant='gen_report_btn' />
    </form>
  );
};

export default SectionHeaderForm;
