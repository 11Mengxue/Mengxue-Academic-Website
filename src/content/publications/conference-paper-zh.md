---
title: "基于多源环境数据的城市植被空气质量效应建模"
description: "利用多源环境数据研究植被形态与颗粒物空气污染的框架。"
locale: zh
translationKey: conference-paper
slug: conference-paper-zh
routeSlug: conference-paper
date: 2025-10-01
draft: false
authors: ["Mengxue Yao", "Michael Smith", "Chengzhi Peng"]
venue: "Sustainable Cities: Pioneering Approaches to Green Urbanism and Climate Resilience"
year: 2025
type: chapter
doi: "https://doi.org/10.1007/978-3-031-86095-9_5"
pdf: "/downloads/conference-paper.pdf"
code: "https://github.com/11Mengxue/Pilot-Study"
citation: "/downloads/conference-paper.bib"
featured: false
---

空气污染是全球公共健康面临的最大威胁之一。已有研究表明，植被会对城市空气质量产生一定影响。由于真实城市具有复杂的空间构型，量化植被对城市地区空气污染物浓度的影响仍然具有挑战性。相关知识与方法对于以改善城市空气质量为目标的植被规划与设计至关重要。高分辨率计算流体力学（CFD）模拟通过控制大量变量，是量化植被影响的现有方法之一。然而，CFD 模拟往往受到计算资源限制，难以对完整的真实城市环境进行精细建模。本文提出一种替代性建模框架，基于卫星、地面传感与影像等多源真实城市环境数据评估植被对城市空气质量的影响。首先，依据多角度成像光谱辐射计（MISR）卫星气溶胶光学厚度（AOD）数据以及地面监测站提供的空气污染物数据，采用基于随机森林的方法生成覆盖大范围城市区域的高空间分辨率 PM₂.₅ 浓度分布。随后，以城市网格为基础，对道路长度等非植被城市形态变量进行聚类。在不同城市聚类中，进一步对大规模街景图像应用深度学习图像分割方法，提取植被形态特征，并追踪其与 PM₂.₅ 浓度之间的关系。该建模框架首先在中国东北部空气质量较差的重要城市哈尔滨进行测试。本研究旨在为量化真实城市环境中城市植被对空气质量的影响提供更加有效且稳健的方法。

**关键词：** MISR AOD；PM₂.₅ 预测；城市形态；植被特征。
