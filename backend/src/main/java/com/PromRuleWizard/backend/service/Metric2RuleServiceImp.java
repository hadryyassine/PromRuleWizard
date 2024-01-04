package com.PromRuleWizard.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PromRuleWizard.backend.dto.ApplicationMetricsDto;

@Service
public class Metric2RuleServiceImp implements MetricToRuleService{
	@Autowired private M2MService m2mService ; //generates the target model
	@Autowired private M2TService m2tService ; // generate the YML content
	@Override
	public String metricToRuleTransformer(ApplicationMetricsDto applicationMetricDto) {
		
		//feed the model to the M2Mtransformer
		
		//feed the target model to the M2tTransformer 
		
		//return the content of the YML file 
		return null;
	}

}
