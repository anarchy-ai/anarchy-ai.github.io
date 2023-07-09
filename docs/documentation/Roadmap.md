---
sidebar_position: 5
---

# Roadmap

### Tasks for end of June and through July 2023

#### LLM-VM tasks

##### Error handling
1. Can cleanup in progress fine tunings when ctrl+c abort the local version of LLM-VM Feature/carter qol -- finetuning cancelation support and retry logic #23
1. Can retry data synthesis when given malformed json results Feature/carter qol -- finetuning cancelation support and retry logic #23
1. Maybe later should consider a more robust encoding rather than json, where mismatched brackets from unquoted responses identify more robust output format for data synthesis #29

##### Agents
1. Get REBEL agent onto main branch LLM-VM/main Pull in agents from LLM-VM-add-agents branch #2
1. Get Backward Chaining agent onto main branch LLM-VM/main Pull in agents from LLM-VM-add-agents branch #2
1. Get all agents to use the optimizer endpoint, as opposed to the openai api Update agents to use optimizing completion API. #19
1. Get Flat agent on LLM-VM/main Pull in agents from LLM-VM-add-agents branch #2
1. Agent test suite Add agent test suites that actually work #20

##### Documentation
1. Write documentation for LLM-VM on docusaurus. github pages style website + docusourus for entire anarchy project #22
Data Synthesis #3
1. Add all the parameters
1. Choose a more robust encoding for question answer response sets identify more robust output format for data synthesis #29
1. K-shot support
1. Prompt variation aka support alternative prompts, possibly with different defaults for each supported model
1. Track number of actual responses vs requested
1. Dedup handling
    1. First exact repeat parameters 
    1. then semantic vector comparisons?
1. Parameterize the diverse ways you might want to define exact matches or vector comparisions

##### Parameter Management
- Documenting all the parameters and making sure they’re sane parameter/configuration management and documentation #25
##### Instrumentation / Statistics
- Keep track of detailed information about inference, data synthesis, response sizes, latency, quality Keep track of detailed information about inference, data synthesis, response sizes, latency, quality #26
##### Inference Determinism (more long term question,not immediate prioriity)
- What LLM flavors have explicit rng Seed being surfaces as optional input or something that can be part of the response metadata for reproducibility? What LLM flavors have explicit rng Seed being surfaces as optional input or something that can be part of the response metadata for reproducibility? () #27
##### misc
- Maybe also something about managing/tracking fine tunings you’ve generated track information about fine tunings that have been persisted, or at least what the base prompt and Q,A pair associated with it #28