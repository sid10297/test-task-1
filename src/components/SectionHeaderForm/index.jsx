import React from "react";
import Button from "../Button";
import SelectDate from "../SelectDate";
import Select from "../Select";
import "./index.css";

const SectionHeaderForm = () => {
  return (
    <form className='section_form'>
      <div className='select_projects'>
        <Select
          select_id='select_projects'
          select_name='select_projects'
          option_label='All projects'
          option_value='all_projects'
        />
      </div>
      <div className='select_gateways'>
        <Select
          select_id='select_gateways'
          select_name='select_gateways'
          option_label='All gateways'
          option_value='gateways'
        />
      </div>
      <div className='select_start_date'>
        <SelectDate label="From date" />
      </div>
      <div className='select_end_date'>
        <SelectDate label="To date" />
      </div>
      <Button label='Generate report' variant='gen_report_btn' />
    </form>
  );
};

export default SectionHeaderForm;
