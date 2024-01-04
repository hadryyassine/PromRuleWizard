package com.PromRuleWizard.backend.service;

import com.PromRuleWizard.backend.util.FileReader;
import com.PromRuleWizard.backend.util.ModelLoader;
import jakarta.annotation.PostConstruct;
import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.eclipse.epsilon.eol.exceptions.EolRuntimeException;
import org.eclipse.epsilon.etl.EtlModule;
import org.springframework.stereotype.Service;


import java.io.IOException;

@Service
public class Model2ModelService {

    private String appMetric;
    private String promothRule;
    private String transformation;

    public InMemoryEmfModel modelToModelTransformation(String inputFlexmi) throws Exception {
        EtlModule module = new EtlModule();
        module.parse(transformation);
        if(!module.getParseProblems().isEmpty()){
            throw new RuntimeException(module.getParseProblems().get(0).toString());
        }
        module.getContext().setOutputStream(System.out);
        return runTransformation(
                module,
                inputFlexmi,
                appMetric,
                promothRule
        );
    }

    private InMemoryEmfModel runTransformation(EtlModule module, String inputFlexmi, String inputEmfatic, String promothRuleEmfatic)
            throws IOException, EolRuntimeException {
        System.out.println("runTransformation");
        InMemoryEmfModel inputModel = ModelLoader.getInMemoryFlexmiModel(inputFlexmi, inputEmfatic);
        inputModel.setName("Source");
        InMemoryEmfModel promethRuleModel = ModelLoader.getBlankInMemoryModel(promothRuleEmfatic);
        promethRuleModel.setName("Target");
        module.getContext().getModelRepository().addModel(inputModel);
        module.getContext().getModelRepository().addModel(promethRuleModel);
        module.execute();
        return promethRuleModel;
    }

    @PostConstruct
    public void loadFiles()
    {
        appMetric = FileReader.readFile("Models/ApplicationMetricsSpecifications.emf");
        promothRule = FileReader.readFile("Models/PrometheusRules.emf");
        transformation = FileReader.readFile("Transformations/AppMetric2Rule.etl");
    }
}
