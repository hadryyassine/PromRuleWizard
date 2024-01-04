package com.PromRuleWizard.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PromRuleWizard.backend.dto.ApplicationMetricsDto;
import com.PromRuleWizard.backend.service.MetricToRuleService;

@RestController("/CreatePromeRule")
public class PromeRuleController {
	@Autowired private MetricToRuleService service ; 
	@PostMapping() public ResponseEntity<?> CreatPromeRule(@RequestBody ApplicationMetricsDto applicationmetricsdto) {
		
	String Rule = service.metricToRuleTransformer(applicationmetricsdto) ; 
	
	return ResponseEntity.status(200).body(Rule);
	}
}
