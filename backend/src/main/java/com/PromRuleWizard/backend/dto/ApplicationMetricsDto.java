package com.PromRuleWizard.backend.dto;

public class ApplicationMetricsDto {

		private String sourceFlexmi;
		private String targetProm;

		public ApplicationMetricsDto(String sourceFlexmi, String targetProm)
		{
			this.sourceFlexmi = sourceFlexmi;
			this.targetProm = targetProm;
		}

		public String getSourceFlexmi()
		{
			return sourceFlexmi;
		}

		public void setSourceFlexmi(String sourceFlexmi)
		{
			this.sourceFlexmi = sourceFlexmi;
		}

		public String getTargetProm()
		{
			return targetProm;
		}

		public void setTargetProm(String targetProm)
		{
			this.targetProm = targetProm;
		}
	}
	
	

