package com.PromRuleWizard.backend.service;

import com.PromRuleWizard.backend.dto.ApplicationMetricsDto;

public interface MetricToRuleService {
	// this function create the YML file using the other services, generates a YML file and sends the content to the client 
	public String metricToRuleTransformer(ApplicationMetricsDto applicationMetricDto) ; 
}
