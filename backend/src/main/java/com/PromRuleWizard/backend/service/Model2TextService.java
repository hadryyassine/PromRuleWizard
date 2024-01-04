package com.PromRuleWizard.backend.service;

import java.io.File;

import org.eclipse.epsilon.egl.EglTemplateFactoryModuleAdapter;
import org.eclipse.epsilon.egl.IEglModule;
import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;

import jakarta.annotation.PostConstruct;

public class Model2TextService implements M2TService {
    @Override
    public String model2TextTransformer(InMemoryEmfModel targetModel) throws Exception {
        // getting the EGL module :
        IEglModule module = (IEglModule) new EglTemplateFactoryModuleAdapter();
        // Parse PrometheusRule.egl :
        module.parse(new File("/PromotheusRule.egl"));
        if (!module.getParseProblems().isEmpty()) {
            throw new RuntimeException(module.getParseProblems().get(0).toString());
        }
        // Make the document visible to the EGX program
        module.getContext().getModelRepository().addModel(targetModel);
        // ... and execute
        return module.execute() + "";

    }

}
