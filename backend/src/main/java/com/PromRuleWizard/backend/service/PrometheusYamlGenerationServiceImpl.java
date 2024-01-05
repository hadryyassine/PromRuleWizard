package com.PromRuleWizard.backend.service;


import org.eclipse.epsilon.emc.emf.InMemoryEmfModel;
import org.eclipse.epsilon.egl.EglTemplateFactoryModuleAdapter;
import org.eclipse.epsilon.egl.IEglModule;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import java.io.File;
import java.util.Map;

@Service
public class PrometheusYamlGenerationServiceImpl implements PrometheusYamlGenerationService {

    private Map<String, String> <promethe>usYamlTransformations;

    @Override
    public String generatePrometheusYaml(InMemoryEmfModel model, String targetFormat) throws Exception {
        IEglModule module = (IEglModule) new EglTemplateFactoryModuleAdapter();
        module.parse(prometheusYamlTransformations.get(targetFormat), new File("/prometheusYamlGeneration.egl"));

        if (!module.getParseProblems().isEmpty()) {
            throw new RuntimeException(module.getParseProblems().get(0).toString());
        }

        module.getContext().getModelRepository().addModel(model);

        return module.execute() + "";
    }

    @PostConstruct
    public void loadPrometheusYamlTransformationFiles() {
        prometheusYamlTransformations = Map.of(
                "default", FileReader.readFile("transformations/PrometheusYamlGeneration.egl"),
                // Add more target formats as needed
        );
    }
}