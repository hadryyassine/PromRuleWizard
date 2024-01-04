package com.PromRuleWizard.backend.controller;

import com.PromRuleWizard.backend.service.Model2ModelService;
import com.PromRuleWizard.backend.service.Model2TextService;
import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PromRuleWizard.backend.dto.ApplicationMetricsDto;
@RestController
public class PromeRuleController {
	@Autowired
	private Model2ModelService model2ModelService;
	@Autowired
	private Model2TextService model2TextService;

	@PostMapping("/forwards")
	public ResponseEntity<?> forwardEngineering(@RequestBody ApplicationMetricsDto ApplicationMetricDTO) throws Exception
	{
		InMemoryEmfModel targetModel = model2ModelService
				.modelToModelTransformation(ApplicationMetricDTO.getSourceFlexmi());
		String generatedConfigFile = model2TextService
				.model2TextTransformer(targetModel);
		return ResponseEntity.ok(generatedConfigFile);
	}


}
