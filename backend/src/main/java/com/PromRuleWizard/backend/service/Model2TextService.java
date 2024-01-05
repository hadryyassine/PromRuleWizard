package com.PromRuleWizard.backend.service;

import java.io.File;

import com.PromRuleWizard.backend.util.FileReader;
import org.eclipse.epsilon.egl.EglTemplateFactoryModuleAdapter;
import org.eclipse.epsilon.egl.IEglModule;
import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.springframework.stereotype.Service;

@Service

public class Model2TextService{
    private String modelToText = FileReader.readFile("Transformations/PromotheusRule.egl");

    public String model2TextTransformer(InMemoryEmfModel targetModel) throws Exception {
        IEglModule module = (IEglModule) new EglTemplateFactoryModuleAdapter();
        module.parse(modelToText, new File("/program.egl"));
        if (!module.getParseProblems().isEmpty()) {
            throw new RuntimeException(module.getParseProblems().get(0).toString());
        }
        module.getContext().getModelRepository().addModel(targetModel);
        return module.execute() + "";

    }

}