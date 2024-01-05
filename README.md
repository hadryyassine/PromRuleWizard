## Introduction

In the ever-evolving landscape of software development and operations, DevOps practices are integral in accelerating deployment and maintaining applications. Effective monitoring of application performance is a crucial component for maintaining reliability and service health. However, the complexity and time-consuming nature of configuring monitoring tools like Prometheus can be a significant hurdle.

## Problem Statement

A primary challenge in DevOps is the efficient generation of monitoring rules for applications. The manual process of translating application metrics specifications into detailed Prometheus monitoring rules is error-prone and time-consuming. This manual approach hinders the rapid deployment and iterative development that are essential in effective DevOps practices.

## Proposed Solution

<p align="center" >
<img src= "Resource/logo.png" height="180" width="auto" />
</p>

This project introduces a web-based application designed to automate the generation of Prometheus monitoring rules from user-defined application metrics specifications. Utilizing Model-Driven Engineering (MDE), the application will transform metrics into detailed Prometheus alerting and recording rules in YAML format. Developed using Spring Boot and React JS, it will provide an intuitive interface for inputting metrics specifications. The backend will process this input, converting it into Prometheus-compatible rules, thus providing users with ready-to-use YAML files for their monitoring setup. This solution aims to simplify the monitoring setup process, ensuring accuracy and consistency in the Prometheus rules generation, and enhancing the efficiency of DevOps workflows.

## Architecture & Road map

<h3>Architecture </h3>

<p align="center" >
<img src= "Resource/secondArchitecture.png" height="auto" width="auto" />
</p>

<h3>Road Map </h3>

<p align="center" >
<img src= "Resource/RoadMap.jpeg" height="auto" width="auto" />
</p>

## Selected metamodels

<h3>Source Meta Model : Application Metrics Specification </h3>
<p align="center" >
<img src= "Resource/Source.jpeg" height="360" width="auto" />
</p>

- The Source Metamodel is centered around `MetricSpecification`, which defines metrics, their names, alert conditions, thresholds, labels, and annotations.
- `MetricSpecification` includes:
  - `metricName`: The name of the metric.
  - `alertConditions`: Conditions under which alerts should be triggered.
  - `thresholds`: Defined critical and warning thresholds for metrics.
  - `labels`: Key-value pairs for metric categorization.
  - `annotations`: Additional information associated with the metric.

<h3>Target Meta Model : Promotheus Rule YAML </h3>
<p align="center" >
<img src= "Resource/Target.jpeg" height="180" width="auto" />
</p>

- The Target Metamodel is designed for `PrometheusRule`, which is used for alerting and recording rules in Prometheus.
- `PrometheusRule` includes:
  - `ruleType`: Determines if the rule is an alert or a record.
  - `name`: The name of the rule, based on the metric name and its type.
  - `expression`: The logic or condition defining the rule.
  - `forDuration`: The duration for which the condition must be true.
  - `labels`: Key-value pairs used for filtering and aggregation.
  - `annotations`: Descriptive information providing more context about the rule.

## Transformation Playground

<p align="center" >
<img src= "Resource/ETL.png" height="180" width="auto" />
</p>

- This ATL rule transforms a `MetricSpecification` into a `PrometheusRule`.
- The `ruleType` is determined based on the `conditionType` of the `alertConditions` in the source metamodel.
- The `name`, `expression`, `forDuration`, `labels`, and `annotations` are mapped and transformed from the source to the target metamodel.

## Generation Playground

<p align="center" >
<img src= "Resource/EGL.png" height="180" width="auto" />
</p>

- The EGL template provides a textual representation of a `PrometheusRule` instance.
- It visualizes the properties of `PrometheusRule` like `ruleType`, `name`, `expression`, along with its `labels` and `annotations`.
- The template is designed to iterate over the `labels` and `annotations` collections, displaying each key-value pair.

## Contributers

- [Yassine Hadry](https://github.com/hadryyassine)
- [Fatima Zahra Zarhouni](https://github.com/zarhouni21)
- [Salma Garmouti](https://github.com/GarmoutiSalma)

## Aknowledgement

This project was inspired from this Repository, mainly the backend and the frontend : https://github.com/Assifar-Karim/MonasCI !

## Conclusion

The Prometheus Monitoring Rules Generator represents a significant advancement in the field of DevOps and application monitoring. By automating the conversion of high-level application metrics into detailed monitoring rules, this tool not only saves time and reduces the potential for errors, but also democratizes the process, making advanced monitoring setups accessible to a wider range of users, regardless of their expertise in Prometheus. Looking forward, the potential for further enhancements and integrations with other DevOps tools opens a pathway for even more streamlined and efficient application monitoring solutions.
