package com.PromRuleWizard.backend.service;

import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;

public interface M2TService {
	String model2TextTransformer(InMemoryEmfModel targetModel) throws Exception ; 
}
